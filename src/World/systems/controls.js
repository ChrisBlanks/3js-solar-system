import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

function createControls(camera, canvas){
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true; //gives a sense of 'weight' to the controls
    controls.target.y = 1;

    controls.tick = () => controls.update(); //update animation every tick

    return controls;
}

export { createControls };