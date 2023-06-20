import { DirectionalLight, HemisphereLight} from "three";

function createAmbientLight(){
    const defaultSkyColor= 'white';
    const defaultGroundColor= 'darkslategray';
    const defaultIntensity = 3;

    const ambientLight = new HemisphereLight(defaultSkyColor,defaultGroundColor,defaultIntensity);

    return ambientLight;
}

function createDirectionalLight(){
    const defaultLightColor= 'white';
    const defaultIntensity = 8;
    
    const mainLight = new DirectionalLight(defaultLightColor,defaultIntensity);

    return mainLight;
}

export {createAmbientLight, createDirectionalLight};