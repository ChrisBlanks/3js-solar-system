import { WebGLRenderer} 
from "../../../node_modules/three/build/three.module.js";

function createRenderer(){
    const renderer = new WebGLRenderer( { antialias: true, alpha: true});

    renderer.useLegacyLights = true;
    return renderer;
}

export {createRenderer};