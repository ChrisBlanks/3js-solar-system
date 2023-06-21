import { createMaterials } from "./materials";
import { createGeometries } from "./geometries";

import { Mesh } from "three";



const MeshFactory = function(){
    this.createMesh = function(meshType){
        var mesh;

        if(meshType.toUpperCase() === "Sun".toUpperCase()){
            const sizes = {radius: 5, widthSegs: 16, heightSegs: 16};
            const positions = {x: 0, y: 0, z: 0};
            mesh = createMesh("yellow","SphereGeometry",sizes,positions,null,true);
        } else if(meshType.toUpperCase() === "Mercury".toUpperCase()){
            const sizes = {radius: 0.5, widthSegs: 16, heightSegs: 16};
            const positions = {x: 0, y: 0, z: 7};
            mesh = createMesh("gray","SphereGeometry",sizes,positions,null);
        }  else if(meshType.toUpperCase() === "Venus".toUpperCase()){
            const sizes = {radius: 1, widthSegs: 16, heightSegs: 16};
            const positions = {x: 0, y: 0, z: 9};
            mesh = createMesh("tan","SphereGeometry",sizes,positions,null);
        }  else if(meshType.toUpperCase() === "Earth".toUpperCase()){
            const sizes = {radius: 1, widthSegs: 16, heightSegs: 16};
            const positions = {x: 0, y: 0, z: 11};
            mesh = createMesh("blue","SphereGeometry",sizes,positions,null);
        } else { //if type not found, use generic mesh

        }

        return mesh;
    }
}


function createMesh(color, geometry, sizes, positions, rotations, isBasicMaterial=false){
    const mats = createMaterials(color, isBasicMaterial);
    const geometries = createGeometries(geometry, sizes);

    const astroObjMesh = new Mesh(geometries.body, mats.material);
    
    //setup initial position, rotation, size
    if(positions != null){
        astroObjMesh.position.set(positions.x, positions.y, positions.z);
    }

    if(rotations != null){
        
    }

    return astroObjMesh;
}

export{ MeshFactory };