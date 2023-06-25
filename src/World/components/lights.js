import { DirectionalLight, HemisphereLight, PointLight} from "three";

function createAmbientLight(colorSky='white', colorGround='darkslategray', intensity=3){
    const ambientLight = new HemisphereLight(colorSky,colorGround,intensity);
    return ambientLight;
}

function createDirectionalLight(color='white',intensity=8){
    const mainLight = new DirectionalLight(color,intensity);
    return mainLight;
}

function createPointLight(color='white',intensity=1,distance=0){
    const pointLight= new PointLight(color,intensity,distance); //0 distance = infinite
    return pointLight;
}

export {createAmbientLight, createDirectionalLight,createPointLight};