import { Clock} 
from "../../../node_modules/three/build/three.module.js";


const clock = new Clock();

class Loop {
    constructor(camera, scene, renderer){
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;

        //create array of objects that will be updated in loop
        this.updatetables = [];
    }

    start(){
        this.renderer.setAnimationLoop( () => {
            this.tick(); //start ticking of updatetables objects
            this.renderer.render(this.scene, this.camera); //render a new frame
        });
    }

    stop(){
        this.renderer.setAnimationLoop(null);
    }

    tick(){
        const delta = clock.getDelta(); //call only once to get time since last call
        for(const object of this.updatetables){
            object.tick(delta);
        }
    }

}

export{Loop};