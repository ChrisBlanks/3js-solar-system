import { SphereGeometry } from "three";

function createGeometries(){
    const body = new SphereGeometry(2,16,16);
    return { body };
}

export{ createGeometries};