
const setSize = (container, camera, renderer) => {
    camera.aspect = container.clientWidth/ container.clientHeight; //setup aspect ration (W/H)
    camera.updateProjectionMatrix(); //update camera view frustum

    renderer.setSize(container.clientWidth,container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
};

class Resizer {
    constructor(container, camera, renderer){
        setSize(container, camera, renderer);

        window.addEventListener('resize',() => {
            setSize(container, camera, renderer);
            this.onResize();
        });
    }

    //defined by external code
    onResize(){}
}

export {Resizer};