import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Environment from '/src/environment.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// add environment
const environment = new Environment();
scene.add(environment.group);

camera.position.set( 5, 10, 80 );


function animate() {
	requestAnimationFrame( animate );

	//camera.lookAt(cube.position);
	renderer.render( scene, camera );
};

animate();