import * as THREE from 'three';

import firebase from 'firebase/app';
import 'firebase/firestore';


export function createScreen() {
	const video = document.createElement('webcamVideo');
    const webcamVideo = new THREE.VideoTexture(video);
	webcamVideo.minFilter = THREE.NearestFilter;
	webcamVideo.magFilter = THREE.LinearFilter;
	webcamVideo.format = THREE.RGBFormat;
	const width =8, height = 4.5;


	const geometry = new THREE.BoxGeometry( width, height, .2 );
	const material = new THREE.MeshBasicMaterial( { map: webcamVideo ,fog:false } );
	const mesh = new THREE.Mesh( geometry, material);
	mesh.setRotationFromEuler(new THREE.Euler(1.6,0,0))

    
    
  
    
   




console.log(mesh)


	
    return mesh;	
}	