import {WebGLRenderer, PerspectiveCamera, Scene, BoxGeometry, MeshNormalMaterial, Mesh, Color} 
from "three/build/three.module.js";

import './main.css';
import Icon from './glowie.png';

import { World } from './World/World.js';

const myImage = new Image();
myImage.src = Icon;
//document.body.appendChild(myImage);

const cam = new PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.01,10);
cam.position.z = 1;

const scene = new Scene();
//scene.background = new Color(0xffffff); //set to be white bg
scene.background = null;//set to be transparent w/ alpha option true in renderer

const geometry = new BoxGeometry(0.2,0.2,0.2);
const material = new MeshNormalMaterial();
const mesh = new Mesh(geometry,material);

scene.add(mesh);

const renderer = new WebGLRenderer( { antialias:true,alpha:true });
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

function animate(time){
    mesh.rotation.x= time/2000;
    mesh.rotation.y= time/1000;

    renderer.render(scene,cam);
}

window.addEventListener("resize", () => {
    resize(cam, renderer);
});

function resize(camera, rend){
    camera.aspect = window.innerWidth/window.innerHeight; //update aspect ratio after window resize
    camera.updateProjectionMatrix(); //update camera frustum
    rend.setSize(document.body.clientWidth,document.body.clientHeight);
    rend.setPixelRatio(window.devicePixelRatio); //set pixel ratio for mobile devices
}