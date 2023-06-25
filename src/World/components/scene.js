import { Color, Scene, TextureLoader} from "three";

function createScene(){
    const scene = new Scene;
    //const defaultBGColor = 'black';
    //scene.background = new Color(defaultBGColor);

    
    const loader = new TextureLoader();
    const sceneTexture = loader.load('/assets/textures/2k_stars.jpg', (texture) => {
        scene.background = texture;
    });
    return scene;
}

export {createScene};