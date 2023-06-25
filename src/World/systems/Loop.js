import { Clock} 
from "../../../node_modules/three/build/three.module.js";


const clock = new Clock();

class Loop {
    constructor(camera, scene, renderer){
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;

        this.isPaused = false;

        //create array of objects that will be updated in loop
        this.updateTables = [];
    }

    start(){
        this.renderer.setAnimationLoop( () => {
            if(this.isPaused == false){
                this.tick(); //start ticking of updateTables objects
                this.renderer.render(this.scene, this.camera); //render a new frame
            }

        });
    }

    stop(){
        this.renderer.setAnimationLoop(null);
    }

    togglePause(){
        this.isPaused = !this.isPaused;
    }

    tick(){
        const delta = clock.getDelta(); //call only once to get time since last call
        for(const object of this.updateTables){
            object.tick(delta);
        }
    }

}

export{Loop};