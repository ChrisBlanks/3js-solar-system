import { MeshFactory } from "./meshes";
import { Object3D, MathUtils } from "three";

const radiansPerSecond = MathUtils.degToRad(30);

class AstronomicalObject extends Object3D {

    constructor(name){
        super();

        this.name = name;
        var astroObjFactory = new MeshFactory();
        this.mesh = astroObjFactory.createMesh(this.name);
        this.add(this.mesh);
    }


    tick(delta){
        //rotate object ZXY order by 30 deg every second (delta is a partial second)
        //this.rotation.z += radiansPerSecond * delta;
        //this.rotation.x += radiansPerSecond * delta;

        //To-Do: Figure out rotation speed based on factory value
        this.rotation.y += radiansPerSecond * delta;
    }

}

export { AstronomicalObject };