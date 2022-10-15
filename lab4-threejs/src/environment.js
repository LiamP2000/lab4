import * as THREE from 'three';

export default class Environment {
    constructor() {
        this.group = new THREE.Group();
        this.createEnvironment();
        this.createFloor();

    }

    createEnvironment() {
        const cube = new THREE.BoxGeometry( 200, 200, 200 );
        const material = new THREE.MeshBasicMaterial( { color: 0x87ceeb } );
        material.side = THREE.BackSide;
        const environment = new THREE.Mesh( cube, material );
        this.group.add(environment);
    }

    createFloor() {
        const geometry = new THREE.BoxGeometry( 60, 1, 60 );
        const material = new THREE.MeshBasicMaterial( { color: 0x009a17 } );
        material.side = THREE.BackSide;
        const floor = new THREE.Mesh( geometry, material );
        this.group.add(floor);
    }
}
