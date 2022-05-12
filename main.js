
import * as THREE from "../sc/three.module.js";
import { OrbitControls } from "../sc/OrbitControls.js";


var scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a3b4c);

//add camera
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);

//renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//add geometry
var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});
var cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

var controls = new OrbitControls(camera, renderer.domElement);

controls.minDistance = 5; 
controls.maxDistance = 30; 

controls.enableDamping = true;
controls.dampingFactor = 0.5;

controls.maxPolarAngle = Math.PI;

controls.screenSpacePanning = true;

var animate = function () {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
};

animate();
