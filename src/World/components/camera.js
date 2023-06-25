import { PerspectiveCamera} from "three";


function createCamera(){
    const defaultFov = 35;
    const defaultAspectRatio = 1;
    const defaultNearClip = 0.1;
    const defaultFarClip= 5000;

    const camera = new PerspectiveCamera(defaultFov,defaultAspectRatio,defaultNearClip,defaultFarClip);
    
    //set initial position of camera away from default 0,0,0
    camera.position.set(0,20,110);

    //setup animation method based on clock delta
    camera.tick = (delta) => {
        //camera.position.z += 1 * delta; 
        //camera.position.z -= 1 * delta; 
        //camera.position.x += 1;
        //camera.position.y += 1; 
    } 

    return camera;
}

export {createCamera};