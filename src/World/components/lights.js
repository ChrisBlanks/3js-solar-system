import { DirectionalLight, HemisphereLight} from "three";

function createLights(){
    const defaultLightColor= 'white';
    const defaultIntensity = 8;
    
    const mainLight = new DirectionalLight(defaultLightColor,defaultIntensity);

    //setup animation method based on clock delta
    mainLight.tick = (delta) => {
        //light.position.z += 1; // move light away from screen every tick
        //light.position.x += 1; // move light away from screen every tick
        //light.position.y += 1; // move light away from screen every tick
    } 

    const ambientLight = new HemisphereLight('white','darkslategray',3);

    return {mainLight, ambientLight} ;
}

export {createLights};