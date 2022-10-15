import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { TextureLoader } from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

const environment = new THREE.BoxGeometry( 50, 50, 50 );
const material = new THREE.MeshBasicMaterial( { color: 0x87ceeb } );
const cube = new THREE.Mesh( environment, material );
material.side = THREE.BackSide;
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	camera.lookAt(cube.position);
	renderer.render( scene, camera );
};

animate();