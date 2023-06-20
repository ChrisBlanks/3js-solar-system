import { Group, MathUtils } from "three";
import { Planet } from "./Planet/Planet";

//import {};

class SolarSytem extends Group {
    constructor(){
        super();
        this.add( new Planet('earth'), new Planet('mars'));
    }


    tick(delta){
        //To-Do: animate solar system
    }

}

export { SolarSytem };