import { PerspectiveCamera} 
from "../../../node_modules/three/build/three.module.js";


function createCamera(){
    const defaultFov = 35;
    const defaultAspectRatio = 1;
    const defaultNearClip = 0.1;
    const defaultFarClip= 100;

    const camera = new PerspectiveCamera(defaultFov,defaultAspectRatio,defaultNearClip,defaultFarClip);
    
    //set initial position of camera away from default 0,0,0
    camera.position.set(0,0,10);

    return camera;
}

export {createCamera};