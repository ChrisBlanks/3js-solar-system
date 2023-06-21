import { Group, MathUtils } from "three";
import { AstronomicalObject } from "./AstronomicalObject/AstronomicalObject";


class SolarSytem extends Group {
    constructor(){
        super();
        this.updateTables = [];
        
        //create solar system
        const sun = new AstronomicalObject("Sun");
        const mercury = new AstronomicalObject("Mercury");
        const venus = new AstronomicalObject("Venus");
        const earth = new AstronomicalObject("Earth");

        this.add(sun, mercury, venus, earth); //add objects to solar system group
        this.updateTables.push(sun, mercury, venus, earth); 
    }


    tick(delta){
        for(const object of this.updateTables){
            object.tick(delta);
        }
    }

}

export { SolarSytem };