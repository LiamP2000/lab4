import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; 
import Environment from '/src/environment.js';
import House from '/src/house.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set( 50, 75, 0 );
scene.add(directionalLight);

// add environment
const environment = new Environment();
scene.add(environment.group);

// add walls
const house = new House();
scene.add(house.group);


const addAnimal = (x, z) => {
	// load gltf model
	let animal;
	const loader = new GLTFLoader();
	loader.load('/models/grogu/scene.gltf', function (gltf) {
		animal = gltf.scene;
		animal.position.set( x, 0.5, z );
		animal.scale.set( 15, 15, 15 );
		// rotate animal
		animal.rotateY(Math.random() * Math.PI * 2);
		scene.add(animal);
		}
	);
}

// place animal random places
for (let i = 0; i < 10; i++) {
	const x = Math.random() * 50 - 25;
	const z = Math.random() * 50 - 25;
	if(x > 13 || x < -13 || z > 13 || z < -13) {
		addAnimal(x, z);
	}
}


camera.position.set( 15, 20, 80 );


function animate() {
	requestAnimationFrame( animate );
	
	camera.position.x = 80 * Math.sin(Date.now() / 1000);
	camera.position.z = 80 * Math.cos(Date.now() / 1000);
	camera.lookAt(0, 0, 0);
	
	renderer.render( scene, camera );
};

animate();