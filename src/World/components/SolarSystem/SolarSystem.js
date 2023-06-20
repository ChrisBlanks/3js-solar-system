import { Group, MathUtils } from "three";
import { AstronomicalObject } from "./AstronomicalObject/AstronomicalObject";


class SolarSytem extends Group {
    constructor(){
        super();
 
        this.add( new AstronomicalObject());
    }


    tick(delta){
        //To-Do: animate solar system
    }

}

export { SolarSytem };