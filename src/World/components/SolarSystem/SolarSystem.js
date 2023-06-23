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
        const mars = new AstronomicalObject("Mars"); 
        const jupiter = new AstronomicalObject("Jupiter"); 
        const saturn = new AstronomicalObject("Saturn"); 
        const uranus = new AstronomicalObject("Uranus"); 
        const neptune = new AstronomicalObject("Neptune"); 

        this.add(sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune); //add objects to solar system group
        this.updateTables.push(sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune); 
    }

//To-Do: 
// some planets revolve faster than others
// some planets rotate faster than others
// sun needs to rotate
// uranus rotates/spins on its side like a ball while the others spin like a top
// this needs to be setup via the tick method
    tick(delta){
        for(const object of this.updateTables){
            object.tick(delta);
        }
    }

}

export { SolarSytem };