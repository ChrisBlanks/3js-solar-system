import { SphereGeometry } from "three";

function createGeometries(geometryType, sizes){
    var body;

    if(geometryType.toUpperCase() === "SphereGeometry".toUpperCase()){
        body = new SphereGeometry(sizes.radius,sizes.widthSegs, sizes.heightSegs);
    } else {
        body = new SphereGeometry(2,25,25);
    }

    return { body };
}

export{ createGeometries};