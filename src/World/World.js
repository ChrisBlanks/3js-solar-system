import {createCamera } from './components/camera.js';
import {createScene } from './components/scene.js';
import * as lights from './components/lights.js';

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

//To-Do: Display location of camera in space
//To-Do: Add controls for following an AO
class World {
    constructor(container){
        //initialize objects
        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();
        loop = new Loop(camera,scene,renderer);

        const solarSystem = new SolarSytem();

        const directionalLight = lights.createDirectionalLight(); 
        const ambientLight = lights.createAmbientLight();
        const pointLight = lights.createPointLight();

        const controls = createControls(camera, renderer.domElement);
        renderer.domElement.style.height="500px";

        //add objects to array of objects that can be updated periodically
        loop.updateTables.push(solarSystem,  camera, controls);

        //add objects to scene and setup view
        scene.add(pointLight);
        //scene.add(createAxesHelper());
        scene.add(solarSystem);
        
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

    togglePause(){
        loop.togglePause();
    }

}

export {World};