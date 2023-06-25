import { createMaterials } from "./materials";
import { createGeometries } from "./geometries";

import { Mesh, MathUtils } from "three";

const textureBaseUri = window.location + 'assets/textures/';

//To-Do: Certain planets have rings, so they'll need multiple meshes
const MeshFactory = function(){
    this.createMesh = function(meshType){
        let mesh;
        let rotationAnimationSpeeds = {xRadPerS: 0, yRadPerS: 0, zRadPerS:0}; //radians per second
        //use earth's diameter as reference size
        // earth = 1 m in 3js = 7,938 mi
        // other A.O.s are scaled based on their relative size to reference

        //use earth's average distance from sun as reference, aka Astronomical Unit (AU)
        // earth 1 AU = 93 million miles = 20 m in 3js
        //calculate position based on AU w/ 20 m scale + offset distance
        // (AU x 20 m) + 10 m
        const DISTANCE_SCALE = 20;
        const OFFSET = 10;

        //Use Earth's orbital speed (revolution around the sun) as a reference
        // Earth's speed = 66,615 mph = 10 radians per second
        const EARTH_ORBIT_SPEED = 10;

        //generate random x positions to make display more interesting
        const UPPER_X = 100;
        const LOWER_X = 1;
        const xPositionSign = Math.random() < 0.5 ? -1 : 1;
        const xPositionCalc = xPositionSign * ((Math.random() * (UPPER_X -LOWER_X)) + LOWER_X);

        let textureUri;
        if(meshType.toUpperCase() === "Sun".toUpperCase()){ 
            const sizes = {radius: 10, widthSegs: 16, heightSegs: 16}; //~175.36x ref diameter; too big, so not to scale value used
            const positions = {x: 0, y: 0, z: 0};
            textureUri = textureBaseUri + '2k_sun.jpg';
            mesh = createMesh("yellow","SphereGeometry",sizes,positions,null,textureUri,true);

            // rotation about y-axis for sun would be its rotational speed, not orbital speed
            // (4,467 mph / 66,615 mph) = 0.0671
            rotationAnimationSpeeds.yRadPerS = MathUtils.degToRad(0.0671*EARTH_ORBIT_SPEED);
        } else if(meshType.toUpperCase() === "Mercury".toUpperCase()){ 
            const sizes = {radius: 0.38/2, widthSegs: 16, heightSegs: 16}; //~.38x ref
            const positions = {
                                x: xPositionCalc,
                                y: 0, 
                                z: (0.4* DISTANCE_SCALE) + OFFSET
                            }; //0.4 AU
            textureUri = textureBaseUri + '2k_mercury.jpg';
            mesh = createMesh("gray","SphereGeometry",sizes,positions,null,textureUri,false);
            
            // (107,082 mph / 66,615 mph) = 1.61
            rotationAnimationSpeeds.yRadPerS = MathUtils.degToRad(1.61*EARTH_ORBIT_SPEED);
        }  else if(meshType.toUpperCase() === "Venus".toUpperCase()){ 
            const sizes = {radius: 0.945/2, widthSegs: 16, heightSegs: 16}; //~.945x ref
            const positions = {
                x: xPositionCalc,
                y: 0, 
                z: (0.7* DISTANCE_SCALE) + OFFSET
            }; //0.7 AU
            textureUri = textureBaseUri + '2k_venus_surface.jpg';
            mesh = createMesh("tan","SphereGeometry",sizes,positions,null,textureUri,false);

            // (78,337 mph / 66,615 mph) = 1.176
            rotationAnimationSpeeds.yRadPerS = MathUtils.degToRad(1.176* EARTH_ORBIT_SPEED);
        }  else if(meshType.toUpperCase() === "Earth".toUpperCase()){ 
            const sizes = {radius: 1/2, widthSegs: 16, heightSegs: 16}; //1x ref
            const positions = {
                x: xPositionCalc,
                y: 0, 
                z: (1* DISTANCE_SCALE) + OFFSET
            }; // 1 AU
            textureUri = textureBaseUri + '2k_earth_daymap.jpg';
            mesh = createMesh("blue","SphereGeometry",sizes,positions,null,textureUri,false);

            rotationAnimationSpeeds.yRadPerS = MathUtils.degToRad(EARTH_ORBIT_SPEED);
        }  else if(meshType.toUpperCase() === "Mars".toUpperCase()){ 
            const sizes = {radius: 0.568/2, widthSegs: 16, heightSegs: 16}; //~.568x ref
            const positions = {
                x: (Math.random() * (UPPER_X -LOWER_X)* xPositionSign) + LOWER_X, 
                y: 0, 
                z: (1.5* DISTANCE_SCALE) + OFFSET
            }; //1.5 AU
            textureUri = textureBaseUri + '2k_mars.jpg';
            mesh = createMesh("burlywood","SphereGeometry",sizes,positions,null,textureUri,false);
            // (53,853 mph / 66,615 mph) = 0.81
            rotationAnimationSpeeds.yRadPerS = MathUtils.degToRad(0.81* EARTH_ORBIT_SPEED);
        }  else if(meshType.toUpperCase() === "Jupiter".toUpperCase()){ 
            const sizes = {radius: 11.212/2, widthSegs: 16, heightSegs: 16}; //~11.212x ref
            const positions = {
                x: xPositionCalc, 
                y: 0, 
                z: (5.2* DISTANCE_SCALE) + OFFSET
            }; //5.2 AU
            textureUri = textureBaseUri + '2k_jupiter.jpg';
            mesh = createMesh("beige","SphereGeometry",sizes,positions,null,textureUri,false);

            // (29,236 mph / 66,615 mph) = 0.44
            rotationAnimationSpeeds.yRadPerS = MathUtils.degToRad(0.44* EARTH_ORBIT_SPEED);
        }  else if(meshType.toUpperCase() === "Saturn".toUpperCase()){ 
            const sizes = {radius: 9.436/2, widthSegs: 16, heightSegs: 16}; //~9.436x ref
            const positions = {
                x: xPositionCalc,
                y: 0, 
                z: (9.5* DISTANCE_SCALE) + OFFSET
            }; //9.5 AU
            textureUri = textureBaseUri + '2k_saturn.jpg';
            mesh = createMesh("moccasin","SphereGeometry",sizes,positions,null,textureUri,false);

            // (21,675 mph / 66,615 mph) = 0.325
            rotationAnimationSpeeds.yRadPerS = MathUtils.degToRad(0.325* EARTH_ORBIT_SPEED);
        }  else if(meshType.toUpperCase() === "Uranus".toUpperCase()){ 
            const sizes = {radius: 4.031/2, widthSegs: 16, heightSegs: 16}; //~4.031x ref
            const positions = {
                x: xPositionCalc,
                y: 0, 
                z: (19.2* DISTANCE_SCALE) + OFFSET
            }; //19.2 AU
            textureUri = textureBaseUri + '2k_uranus.jpg';
            mesh = createMesh("cyan","SphereGeometry",sizes,positions,null,textureUri,false);

            rotationAnimationSpeeds.zRadPerS = -1 * MathUtils.degToRad(30); //rolls on its side
            // (15,233 mph / 66,615 mph) = 0.23
            rotationAnimationSpeeds.yRadPerS = MathUtils.degToRad(0.23* EARTH_ORBIT_SPEED);
        }  else if(meshType.toUpperCase() === "Neptune".toUpperCase()){ 
            const sizes = {radius: 3.905/2, widthSegs: 16, heightSegs: 16}; //~3.905x ref
            const positions = {
                x: xPositionCalc,
                y: 0, 
                z: (30.1* DISTANCE_SCALE) + OFFSET
            }; //30.1 AU
            textureUri = textureBaseUri + '2k_neptune.jpg';
            mesh = createMesh("cornflowerblue","SphereGeometry",sizes,positions,null,textureUri,false);

            // (12,146 mph / 66,615 mph) = 0.182
            rotationAnimationSpeeds.yRadPerS = MathUtils.degToRad(0.182* EARTH_ORBIT_SPEED);
        } else { //if type not found, use default values
            const sizes = {radius: 1/2, widthSegs: 16, heightSegs: 16};
            const positions = {x: 20, y: 10, z: 2};
            mesh = createMesh("white","SphereGeometry",sizes,positions,null);
        }

        return { mesh, rotationAnimationSpeeds};
    }
}


function createMesh(color, geometry, sizes, positions, rotations, textureUri, isBasicMaterial=false){
    const mats = createMaterials(color,textureUri, isBasicMaterial);
    const geometries = createGeometries(geometry, sizes);

    const astroObjMesh = new Mesh(geometries.body, mats.material);
    
    //setup initial position, rotation, size
    if(positions != null){
        astroObjMesh.position.set(positions.x, positions.y, positions.z);
    }

    if(rotations != null){
        astroObjMesh.rotateZ(rotations.z);
        astroObjMesh.rotateX(rotations.x);
        astroObjMesh.rotateY(rotations.y);
    }

    return astroObjMesh;
}

export{ MeshFactory };