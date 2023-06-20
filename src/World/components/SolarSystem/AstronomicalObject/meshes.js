import { createMaterials } from "./materials";
import { createGeometries } from "./geometries";

import { Mesh } from "three";

//To-do: create meshes methods for multiple types of A.O.'s

function createMeshes(){
    const mats = createMaterials();
    const geometries = createGeometries();

    const astroObjMesh = new Mesh(geometries.body, mats.surface);
    
    //setup initial position, rotation, size

    return { astroObjMesh };
}

export{ createMeshes };