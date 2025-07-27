
// Scene
const scene = new THREE.Scene();

//texture
const textureLoader = new THREE.TextureLoader();
const texture1 = textureLoader.load("../static/texture1.jpeg")
const texture2 = textureLoader.load("../static/Texture2.jpeg");
const texture3 = textureLoader.load("../static/texture3.jpeg");
const texture4 = textureLoader.load("../static/blackandwhite.png");

//meshnormalmaterial
// const material = new THREE.MeshNormalMaterial();
// material.flatShading = true;


//MeshMatcapMaterial
// const matcap = textureLoader.load("../static/texture2.jpeg");
// texture3.colorSpace = THREE.SRGBColorSpace;
// matcap.colorSpace = THREE.SRGBColorSpace;

// const material = new THREE.MeshMatcapMaterial();
// material.matcap = matcap;

const ambientLight = new THREE.AmbientLight(0xffffff,0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff,50);
pointLight.position.set(2,3,4);
scene.add(pointLight);

//lambertmaterial ->  to show light
// const material = new THREE.MeshLambertMaterial();

//MeshToonMaterial -> cartoonish way of lambert
const material = new THREE.MeshToonMaterial();

//color batao
// const material = new THREE.MeshBasicMaterial({ map: texture2 });
// const material = new THREE.MeshBasicMaterial();
//color properties
material.color.set("red");
// texture4.colorSpace = THREE.SRGGBColorSpace;
// material.color = new THREE.Color("#ff00ff");
// material.map = texture2;

//wireframing
// material.wireframe = true;

//opacity
material.transparent = true;
// material.opacity = 0.5;

//cut krne ke liye
material.alphaMap = texture2;

//material.color hmesha r,g,b mei color leta h
// front ya back side bs dekhna ho tb
material.side = THREE.DoubleSide;

//meshnormalmaterial



const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), material);
const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
const torus = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.2, 16, 32), material);

// Position the objects
sphere.position.x = -1.5;
plane.position.x = 0;
torus.position.x = 1.5;

// Add to scene
scene.add(sphere, plane, torus);

// Size
const size = {
    width: 700,
    height: 500,
};

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  size.width / size.height,
  0.1,
  1000
);
camera.position.z = 5;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cursor tracking
const cursor = {
  x: 0,
  y: 0
};
window.addEventListener("mousemove", (event) => {
  cursor.x = (event.clientX / window.innerWidth) - 0.5;
  cursor.y = -((event.clientY / window.innerHeight) - 0.5);
});

// Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  plane.rotation.x = elapsedTime*0.3;
  sphere.rotation.x = elapsedTime*0.3;
  torus.rotation.x = elapsedTime*0.3;
  plane.rotation.y = elapsedTime*0.3;
  sphere.rotation.y = elapsedTime*0.3;
  torus.rotation.y = elapsedTime*0.3;

  const radius = 5;
  const angle = cursor.x * Math.PI * 2;
  camera.position.x = Math.sin(angle) * radius;
  camera.position.z = Math.cos(angle) * radius;
  camera.position.y = cursor.y * 5;

  // Fix: look at the center or an actual mesh
  camera.lookAt(plane.position); // ✅ or use Vector3(0,0,0)

  renderer.render(scene, camera);
  requestAnimationFrame(tick);
};

tick();

// Handle window resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});


