import { Color, Scene} 
from "../../../node_modules/three/build/three.module.js";

function createScene(){
    const scene = new Scene;
    const defaultBGColor = 'skyblue';

    scene.background = new Color(defaultBGColor);

    return scene;
}

export {createScene};