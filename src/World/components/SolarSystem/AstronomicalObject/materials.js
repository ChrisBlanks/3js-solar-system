import { MeshStandardMaterial } from "three";

function createMaterials(){
    const surface= new MeshStandardMaterial({color:'orange'});
    return { surface };
}

export{createMaterials};