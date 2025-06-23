import * as THREE from 'https://unpkg.com/three@0.158.0/build/three.module.js';

const scene = new THREE.Scene();

// Box
const geometry = new THREE.BoxGeometry(15, 15, 15);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const box = new THREE.Mesh(geometry, material);
scene.add(box);

// Camera
const size = { width: 700, height: 500 };
const camera = new THREE.PerspectiveCamera(75, size.width / size.height);
camera.position.set(50, 10, 40);
box.position.set(30, 0, 0);
camera.lookAt(box.position);   // so we can see the cube
scene.add(camera);

// Axes Helper (add here!)
const axesHelper = new THREE.AxesHelper(60);
scene.add(axesHelper);

// Renderer
const canvas = document.querySelector('.wbgl');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(size.width, size.height);
renderer.render(scene, camera);
