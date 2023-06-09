import * as THREE from './node_modules/three';

const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer();

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry,material);

function setupThree(){
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
    scene.add(cube);
    
    cam.position.z= 5;
}



function animateCube(cube,renderer,scene, cam){
    requestAnimationFrame(function (){
        animateCube(cube,renderer,scene, cam);
    });
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene,cam);
}

function demo1(){
    setupThree();
    animateCube(cube,renderer,scene, cam);
}

demo1();