import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";

/**
 * Base
 */
// Debug
const gui = new GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
/**
 * Lights
 */
// const ambientLight = new THREE.AmbientLight(0xffffff, 1); // color, intensity
const ambientLight = new THREE.AmbientLight();
ambientLight.color = new THREE.Color("white"); // Set a dark blue color
ambientLight.intensity = 0.5; // Set intensity to 0.5
// scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xff9000, 1,100,1); // color, intensity
pointLight.position.set(2, 3.25, 0); // Set position of the point light
// scene.add(pointLight);

const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 6, 1, 1);
rectAreaLight.position.set(-3, 0, 0);
scene.add(rectAreaLight);

const spotLight = new THREE.SpotLight(0x78ff00, 1, 10, Math.PI * 0.1, 0.25, 1);
spotLight.target.position.x= -0.9;
scene.add(spotLight);

const spotLightHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotLightHelper);

// Add a directional light for contrast
const directionalLight = new THREE.DirectionalLight(0x00fffc, 1);
directionalLight.position.set(3, 3, 3);
// scene.add(directionalLight);

const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0xffaa00, 0.5);
scene.add(hemisphereLight);
// GUI controls
gui.add(ambientLight, 'intensity').min(0).max(2).step(0.01).name("Ambient Intensity");
gui.add(pointLight, 'intensity').min(0).max(5).step(0.01).name("Point Intensity");
gui.add(pointLight.position, 'x').min(-5).max(5).step(0.01).name("Point Light X");
gui.add(pointLight.position, 'y').min(-5).max(5).step(0.01).name("Point Light Y");
gui.add(pointLight.position, 'z').min(-5).max(5).step(0.01).name("Point Light Z");
// gui.add(directionalLight, 'intensity').min(0).max(2).step(0.01).name("Directional Intensity");

/**
 * Object
 */
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial()
);
scene.add(cube);

// Torus geometry: (radius, tube, radialSegments, tubularSegments)
const torusGeometry = new THREE.TorusGeometry(0.5, 0.2, 16, 100);
const torusMaterial = new THREE.MeshStandardMaterial();
const torus = new THREE.Mesh(torusGeometry, torusMaterial);

// Optional: position it so it doesn’t overlap with your cube
torus.position.x = -1.5;

scene.add(torus);



/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 2;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
