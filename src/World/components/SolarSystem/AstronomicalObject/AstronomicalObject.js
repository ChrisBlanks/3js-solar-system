import { createMeshes } from "./meshes";
import { Group } from "three";

class AstronomicalObject extends Group {

    constructor(name){
        super();
        this.name = name;
        
        this.meshes = createMeshes();

        this.add(this.meshes.astroObjMesh);
    }


    tick(delta){
        //To-Do: animate planet
    }

}

export { AstronomicalObject };