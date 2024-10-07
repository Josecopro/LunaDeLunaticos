import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { NavBar } from '../pages/Molecules/NavBar';
import './styles/Simulations.scss';

function Simulation() {
  const mountRef = useRef(null);

  useEffect(() => {
    let planets = []; // Array to hold all the planets

    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create OrbitControls for camera movement
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;  // Smooth movement
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;  // Enable zoom in/out


    // Create the sun with a solid color
    const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 }); // Yellow for the sun
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    // Create planets with solid colors
    const createPlanet = (color, radius, orbitRadius) => {
      const planetGeometry = new THREE.SphereGeometry(radius, 32, 32);
      const planetMaterial = new THREE.MeshBasicMaterial({ color });
      const planet = new THREE.Mesh(planetGeometry, planetMaterial);
      planet.userData = { orbitRadius }; // Store orbit radius for animation
      scene.add(planet);
      return planet;
    };

    const earth = createPlanet(0x0000ff, 1, 10);  // Blue for Earth, at 10 units from the sun
    const mars = createPlanet(0xff0000, 0.8, 15); // Red for Mars, at 15 units from the sun
    planets.push(earth, mars); // Add planets to the array

    // Add lighting for standard materials (if using MeshStandardMaterial)
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // Draw orbits for the planets
    const drawOrbit = (radius) => {
      const orbitGeometry = new THREE.BufferGeometry();
      const orbitMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

      const points = [];
      for (let i = 0; i <= 64; i++) {  // 64 points for a smooth circle
        const angle = (i / 64) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
      }
      orbitGeometry.setFromPoints(points);

      const orbit = new THREE.Line(orbitGeometry, orbitMaterial);
      scene.add(orbit);
    };

    drawOrbit(10); // Orbit for Earth
    drawOrbit(15); // Orbit for Mars

    // Camera position
    camera.position.z = 30;

    // Animate the scene
    const animate = function () {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001; // Get the time

      // Rotate the planets around the sun
      planets.forEach((planet, index) => {
        const orbitRadius = planet.userData.orbitRadius;
        planet.position.x = Math.cos(time * (0.5 + index * 0.2)) * orbitRadius;  // Vary speed for different planets
        planet.position.z = Math.sin(time * (0.5 + index * 0.2)) * orbitRadius;
      });

      // Update controls (smooth movement and damping)
      controls.update();

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <NavBar />
      <section>
        <h1>Simulation</h1>
        <p>Click and drag to move the camera, and scroll to zoom in/out.</p>
        <div ref={mountRef} />
      </section>

      <section>
        <h1>Prey Simulation eating bacteria</h1>
         <img className='Sim' src="../../public/PreySim.gif" alt="Sim" />
      </section>
    </>
  );
}

export { Simulation };
