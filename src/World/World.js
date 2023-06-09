import {createCamera } from './components/camera.js';
import {createCube } from './components/cube.js';
import {createLights } from './components/lights.js';
import {createScene } from './components/scene.js';

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

        const cube = createCube();
        const light = createLights();

        //add objects to array of objects that can be updated periodically
        loop.updatetables.push(cube);

        //add objects to scene and setup view
        scene.add(cube,light);
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