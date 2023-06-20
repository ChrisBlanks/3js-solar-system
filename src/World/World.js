import {createCamera } from './components/camera.js';
import {createCube } from './components/cube.js';
import {createLights } from './components/lights.js';
import {createScene } from './components/scene.js';

import { SolarSytem } from './components/SolarSystem/SolarSystem.js';

import {createAxesHelper, createGridHelper} from './components/helpers.js';

import { createControls } from './systems/controls.js';
import {createRenderer } from './systems/renderer.js';
import {Resizer} from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';


//define module variables that are only valid for module scope
let camera;
let renderer;
let scene;
let loop;

class World {
    constructor(container){
        //initialize objects
        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();
        loop = new Loop(camera,scene,renderer);

        const solarSystem = new SolarSytem();

        const { directLight, ambientLight} = createLights();
        const controls = createControls(camera, renderer.domElement);
        renderer.domElement.style.height="500px";

        //add objects to array of objects that can be updated periodically
        loop.updatetables.push(solarSystem,  camera, controls);

        //add objects to scene and setup view
        scene.add(solarSystem, directLight, ambientLight, createAxesHelper());
        container.append(renderer.domElement);

        const resizer = new Resizer(container,camera,renderer);
    }

    render(){
        renderer.render(scene,camera);
    }

    start(){
        loop.start();
    }

    stop(){
        loop.stop();
    }

}

export {World};