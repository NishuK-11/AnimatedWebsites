import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import GUI from 'lil-gui';
import '../index.css';
import {FontLoader} 

const ThreeScene = () => {
  const containerRef = useRef();

  useEffect(() => {

    const gui = new GUI();

    const scene = new THREE.Scene();

    // Material (No alphaMap)
    const material = new THREE.MeshToonMaterial({ color: 'red', side: THREE.DoubleSide });

    // Meshes
    const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), material);
    const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
    const torus = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.2, 16, 32), material);

    sphere.position.x = -1.5;
    torus.position.x = 1.5;

    scene.add(sphere, plane, torus);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Cursor
    const cursor = { x: 0, y: 0 };
    window.addEventListener('mousemove', (event) => {
      cursor.x = (event.clientX / window.innerWidth) - 0.5;
      cursor.y = -((event.clientY / window.innerHeight) - 0.5);
    });

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      [sphere, plane, torus].forEach((mesh) => {
        mesh.rotation.x = elapsedTime * 0.3;
        mesh.rotation.y = elapsedTime * 0.3;
      });

      const radius = 5;
      const angle = cursor.x * Math.PI * 2;
      camera.position.x = Math.sin(angle) * radius;
      camera.position.z = Math.cos(angle) * radius;
      camera.position.y = cursor.y * 5;

      camera.lookAt(plane.position);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Resize handling
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Cleanup
    return () => {
      window.removeEventListener('resize', () => {});
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

export default ThreeScene;
