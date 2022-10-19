import * as THREE from 'three';


export default class House {
    constructor() {
        this.group = new THREE.Group();
        this.addWalls();
        this.addRoof();
        this.addNamePlate();
    }

    addWalls() {
        const textureLoader = new THREE.TextureLoader();
        const bricks = textureLoader.load('/textures/bricks.jpg');

        const  geometry = new THREE.BoxGeometry( 20, 15, 1 );
        const material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
        material.map = bricks;
        const wall1 = new THREE.Mesh( geometry, material );
        const wall2 = new THREE.Mesh( geometry, material );
        const wall3 = new THREE.Mesh( geometry, material );
        const wall4 = new THREE.Mesh( geometry, material );

        wall1.position.set( 0, 8, 10 );
        wall2.position.set( 0, 8, -10 );
        wall3.position.set( 10, 8, 0 );
        wall3.rotation.y = Math.PI / 2;
        wall4.position.set( -10, 8, 0 );
        wall4.rotation.y = Math.PI / 2;

        this.group.add(wall1);
        this.group.add(wall2);
        this.group.add(wall3);
        this.group.add(wall4);
        
    }

    addNamePlate() {
        const textureLoader = new THREE.TextureLoader();
        const name = textureLoader.load('/textures/name.png');
        const  geometry = new THREE.BoxGeometry( 10, 5, 0.5 );
        const material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
        material.map = name;
        const namePlate = new THREE.Mesh( geometry, material );

        namePlate.position.set( 0, 8, 10.5 );
        this.group.add(namePlate);
    }

    addRoof() {
        const textureLoader = new THREE.TextureLoader();
        const roofPanels = textureLoader.load('/textures/roof.jpg');
        const geometry = new THREE.ConeGeometry( 17, 10, 4 );
        const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
        material.map = roofPanels;
        const roof = new THREE.Mesh( geometry, material );
        

        roof.position.set( 0, 20, 0 );
        roof.rotation.y = Math.PI / 4;
        this.group.add(roof);

    }
}