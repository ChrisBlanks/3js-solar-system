import {AxesHelper, GridHelper} from 'three';

function createAxesHelper(){
    const axesSize = 3;
    const helper = new AxesHelper(axesSize);
    helper.position.set(-3.5,0,-3.5);
    return helper;
}

function createGridHelper(){
    const gridSize = 6;
    const helper = new GridHelper(gridSize);
    return helper;
}

export { createAxesHelper, createGridHelper};