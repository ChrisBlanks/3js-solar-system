import { BoxGeometry, MeshStandardMaterial, Mesh, MathUtils, Color} 
from "../../../node_modules/three/build/three.module.js";


function createCube(){
    const geometry = new BoxGeometry(2,2,2);
    const material = new MeshStandardMaterial({color: 'purple'});
    const cube = new Mesh(geometry, material);
    const radiansPerSecond = MathUtils.degToRad(30);

    //set initial cube rotation in radians
    cube.rotation.set(-0.5, -0.1, 0.8);

    let positionVelocity= 1; //1 meter per second

    //keeps track of how much to change cube position
    let cubeXChange = 0;
    let cubeYChange = 0;
    let cubeZChange = 0;

    //setup listener for keydown event (allows for processing continuous pressing)
    window.addEventListener("keydown", (event) => {
        if(event.defaultPrevented){
            return; //if default action prevented, don't execute callback past this point
        }

        //setup event logic based on arrow keys presses
        // Z, X control Y direction
        // Left, Right control X direction
        // Up, Down control Z direction
        if(event.code === "KeyZ"){
            cubeYChange += -0.05;
        } else if(event.code === "KeyX"){
            cubeYChange += 0.05;
        } else if(event.code === "ArrowLeft"){
            cubeXChange += -0.05;
        } else if(event.code === "ArrowRight"){
            cubeXChange += 0.05;
        } else if(event.code === "ArrowUp"){
            cubeZChange += 1;
        } else if(event.code === "ArrowDown"){
            cubeZChange += -1;
        } 

        event.preventDefault(); //prevent further processing of this event
    });


    let toggle= false;
    let timer = 0;
    let timerLimit = 1; //initial limit is 1 sec

    //setup animation method based on clock delta
    cube.tick = (delta) => {
        timer += delta;

        //if timer limit execeeded (arbitrary number of seconds), execute logic
        if(timer >= timerLimit){
            //change cube color every interval
            if(toggle == true){
                cube.material.color = new Color(0xffff00);
                timerLimit = 1;
                toggle=false;
            } else {
                cube.material.color = new Color('green');
                timerLimit = 5; //set new limit to 5 seconds
                toggle=true;
            }
            timer = 0; //reset timer
        }

        const epsilon = 0.1; //smallest change required to change position

        //check if amount of distance needed to cover is greater than epsilon
        if(Math.abs(cubeXChange) > epsilon ){
            let distance = ( (cubeXChange > 0) ? 1 : -1) * positionVelocity * delta;
            cube.position.x += distance;
            cubeXChange -= distance;
            console.log("X-change: " + cubeXChange);
        }

        const maxValue = 5;
        if(Math.abs(cubeYChange) > epsilon ){
            let distance = ( (cubeYChange > 0) ? 1 : -1) * positionVelocity * delta;
            cube.position.y = (cube.position.y +  distance) % maxValue;
            cubeYChange -= distance;
            console.log("Y-change: " + cubeYChange);
        }

        if(cubeZChange != 0){
            cube.position.z += cubeZChange;
            cubeZChange = 0;
        }
        //rotate cube ZXY order by 30 deg every second (delta is a partial second)
        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
    }    

    return cube;
}

export {createCube};