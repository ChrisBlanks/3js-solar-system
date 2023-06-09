import { BoxGeometry, MeshStandardMaterial, Mesh, MathUtils} 
from "../../../node_modules/three/build/three.module.js";


function createCube(){
    const geometry = new BoxGeometry(2,2,2);
    const material = new MeshStandardMaterial({color: 'purple'});
    const cube = new Mesh(geometry, material);
    const radiansPerSecond = MathUtils.degToRad(30);

    //set initial cube rotation in radians
    cube.rotation.set(-0.5, -0.1, 0.8);

    //setup animation method based on clock delta
    cube.tick = (delta) => {
        //rotate cube ZXY order by 30 deg every second (delta is a partial second)
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
    }    

    return cube;
}

export {createCube};