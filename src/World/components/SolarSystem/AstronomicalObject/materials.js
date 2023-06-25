import { MeshStandardMaterial, MeshBasicMaterial, TextureLoader, RepeatWrapping } from "three";

function createMaterials(materialColor= 'white', textureUri=null,isBasicMaterial = false){
    var material;
    var materialParmeters = {};

    if(textureUri == null){ //if no texture map, use material color
        materialParmeters.color = materialColor;
    } 

    if(isBasicMaterial == true){
        material = new MeshBasicMaterial(materialParmeters);
    } else {
        material = new MeshStandardMaterial(materialParmeters);
    }

    if(textureUri != null && textureUri != ''){
        const loader = new TextureLoader();
        const texture = loader.load(
            textureUri,
            ()=>{}, 
            ()=>{}, 
            function(error) {
                console.log(error);
            }
        );
        material.map = texture;
    }

    return { material };
}

export{createMaterials};