import {createCamera } from './components/camera.js';
import {createAmbientLight, createDirectionalLight } from './components/lights.js';
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

//To-Do: Display location of camera in space
//To-Do: Improve lighting
class World {
    constructor(container){
        //initialize objects
        camera = createCamera();
        renderer = createRenderer();
        scene = createScene();
        loop = new Loop(camera,scene,renderer);

        const solarSystem = new SolarSytem();

        const directionalLight = createDirectionalLight(); 
        const ambientLight = createAmbientLight();

        const controls = createControls(camera, renderer.domElement);
        renderer.domElement.style.height="500px";

        //add objects to array of objects that can be updated periodically
        loop.updateTables.push(solarSystem,  camera, controls);

        //add objects to scene and setup view
        scene.add(ambientLight);
        scene.add(createAxesHelper());
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

}

export {World};