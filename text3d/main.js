import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { LineSegments } from "three";
import { LineBasicMaterial } from "three";
import gsap from "gsap";

// ❌❌ DO NOT import font JSON when using from public ❌❌
// import typeface from "./public/fonts/helvetiker_regular.typeface.json"; 

// ✅ GUI
const gui = new GUI();
console.log("Initialized GUI");

// ✅ Canvas
const canvas = document.querySelector("canvas.webgl");

// ✅ Scene
const scene = new THREE.Scene();
console.log("Scene created");

// ✅ Texture loader (if needed)
const textureLoader = new THREE.TextureLoader();

// ✅ Font Loader
// const fontLoader = new FontLoader();

// fontLoader.load(
//   "/fonts/helvetiker_regular.typeface.json",
//   (font) => {
//     try {
//       console.log("✅ Font loaded successfully");

//       const textGeometry = new TextGeometry("Hello", {
//         font: font,
//         size: 0.5,
//         height: 0.2,
//         curveSegments: 12,
//         bevelEnabled: true,
//         bevelThickness: 0.03,
//         bevelSize: 0.03,
//         bevelOffset: 0,
//         bevelSegments: 3,
//       });
//       const textMaterial = new THREE.MeshBasicMaterial({
//         color: 0xffffff,
//         side: THREE.DoubleSide
//       });

//       textMaterial.wireframe = true; // Optional: Set wireframe mode
//       const text = new THREE.Mesh(textGeometry, textMaterial);
//       const axesHelper = new THREE.AxesHelper(1);
//       scene.add(axesHelper);
//       textGeometry.computeBoundingBox();
//       console.log(textGeometry.boundingBox);

//       // textGeometry.translate(
//       //   -(textGeometry.boundingBox.max.x-0.03) / 2,
//       //   -(textGeometry.boundingBox.max.y-0.03) / 2,
//       //   -(textGeometry.boundingBox.max.z - 0.3) / 2
//       // );
//       textGeometry.center();

//       scene.add(text);
//       console.log("✅ Text added to the scene");
//     } catch (e) {
//       console.error("❌ Error creating text geometry:", e);
//     }
//   },
//   undefined,
//   (error) => {
//     console.error("❌ Font loading error:", error);
//   }
// );
  const x = 0, y = 0;

const heartShape = new THREE.Shape();

heartShape.moveTo( x + 5, y + 5 );
heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );

for(let i=0;i<500;i++) {

const geometry = new THREE.ShapeGeometry( heartShape );
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const mesh = new THREE.Mesh( geometry, material ) ;
mesh.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
mesh.rotation.x = Math.random() * Math.PI;

mesh.scale.set(0.01, 0.01, 0.01); // scales heart to 10% size in all directions
gsap.to(mesh.scale, {
  x: 0.02,
  y: 0.02,
  z: 0.02,
  duration: 1,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true
});
scene.add( mesh );

}

for(let i=0;i<200;i++) {

const geometry = new THREE.ShapeGeometry( heartShape );
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const mesh = new THREE.Mesh( geometry, material ) ;
mesh.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
mesh.rotation.x = Math.random() * Math.PI;

mesh.scale.set(0.01, 0.01, 0.01); // scales heart to 10% size in all directions
gsap.to(mesh.scale, {
  x: 0.02,
  y: 0.02,
  z: 0.02,
  duration: 1,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true
});
scene.add( mesh );

}

for(let i=0;i<100;i++) {

const geometry = new THREE.ShapeGeometry( heartShape );
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const mesh = new THREE.Mesh( geometry, material ) ;
mesh.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
mesh.rotation.x = Math.random() * Math.PI;

mesh.scale.set(0.015, 0.015, 0.015); // scales heart to 10% size in all directions
gsap.to(mesh.scale, {
  x: 0.02,
  y: 0.02,
  z: 0.02,
  duration: 0.6,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true
});
scene.add( mesh );

}

// ✅ Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  console.log("📏 Window resized");

  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// ✅ Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(1, 1, 2);
scene.add(camera);
console.log("📷 Camera set");

// ✅ Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// ✅ Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
console.log("🖼️ Renderer initialized");

// ✅ Animation loop
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  controls.update();
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
console.log("🎥 Animation started");
