import { MeshStandardMaterial, MeshBasicMaterial } from "three";

function createMaterials(materialColor= 'yellow',isBasicMaterial = false){
    var material;

    if(isBasicMaterial == true){
        material = new MeshBasicMaterial({color: materialColor});
    } else {
        material = new MeshStandardMaterial({color: materialColor});
    }

    return { material };
}

export{createMaterials};