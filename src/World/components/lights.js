import { DirectionalLight} 
from "../../../node_modules/three/build/three.module.js";

function createLights(){
    const defaultLightColor= 'white';
    const defaultIntensity = 8;
    
    const light = new DirectionalLight(defaultLightColor,defaultIntensity);

    return light;
}

export {createLights};