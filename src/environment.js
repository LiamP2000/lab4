import * as THREE from 'three';

export default class Environment {
    constructor() {
        this.group = new THREE.Group();
        this.addEnvironment();
        this.addFloor();

    }

    addEnvironment() {
        const cube = new THREE.BoxGeometry( 200, 200, 200 );
        const material = new THREE.MeshBasicMaterial( { color: 0x87ceeb } );
        material.side = THREE.BackSide;
        const environment = new THREE.Mesh( cube, material );
        this.group.add(environment);
    }

    addFloor() {
        const textureLoader = new THREE.TextureLoader();
        const grass = textureLoader.load('/textures/grass.jpg');
        const geometry = new THREE.BoxGeometry( 60, 1, 60 );
        const material = new THREE.MeshLambertMaterial( { color: 0x009a17 } );
        material.map = grass;
        const floor = new THREE.Mesh( geometry, material );
        this.group.add(floor);
    }
}
