import { MeshFactory } from "./meshes";
import { Object3D, Group } from "three";


class AstronomicalObject extends Object3D {

    constructor(name){
        super();

        this.name = name;
        var astroObjFactory = new MeshFactory();
        const generatedMesh = astroObjFactory.createMesh(this.name);
        
        this.mesh = generatedMesh.mesh;
        this.rotationAnimationSpeeds = generatedMesh.rotationAnimationSpeeds;

        this.add(this.mesh);
    }

//To-Do: 
// some planets rotate faster than others
// uranus rotates/spins on its side like a ball while the others spin like a top
    tick(delta){
        //rotate AO about global coordinate space 
        //this.rotation.z += this.rotationAnimationSpeeds.zRadPerS * delta;
        this.rotation.x += this.rotationAnimationSpeeds.xRadPerS * delta;
        this.rotation.y += this.rotationAnimationSpeeds.yRadPerS * delta; 

        //rotate mesh about its axis
        //this.mesh.rotation.y += this.rotationAnimationSpeeds.yRadPerS * delta;
        this.mesh.rotation.z += this.rotationAnimationSpeeds.zRadPerS * delta;
    }

}

export { AstronomicalObject };