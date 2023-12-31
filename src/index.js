import { World } from "./World/World";

import './main.css';

function importAll(r) {
    return r.keys().map(r);
}
  

function main(){
    const images = importAll(require.context('../assets/textures', false, /\.(png|jpe?g|svg)$/));
    const container = setupContainer();
    const world = new World(container);
    setupAnimationButtons(world);
    setupFullscreenButton();
    //setupClickListener(world,container);
}

main();


function setupContainer (){
    //create and insert container into page
    const container = document.createElement('div');
    container.id = 'scene-container';
    document.body.appendChild(container);

    return container;
}

function setupAnimationButtons(world){
    const controlDiv = document.createElement('div');
    controlDiv.id='controlDiv';
    controlDiv.style.display='flex';
    controlDiv.style.flexDirection='row';
    controlDiv.style.justifyContent='center';
    controlDiv.style.alignItems='center';

    const startButton = document.createElement('button');
    const stopButton = document.createElement('button');
    const renderButton = document.createElement('button');

    startButton.innerHTML='Start Animation';
    stopButton.innerHTML='Stop Animation';
    renderButton.innerHTML = 'Render Frame';

    startButton.addEventListener('click', () => {
        world.start();
    });

    stopButton.addEventListener('click', () => {
        world.stop();
    });

    renderButton.addEventListener('click', () => {
        world.render();
    });

    controlDiv.appendChild(startButton);
    controlDiv.appendChild(stopButton);
    controlDiv.appendChild(renderButton);
    document.body.appendChild(controlDiv)
}

function setupFullscreenButton(){
    const controlDiv = document.getElementById('controlDiv');
    const fullScreenButton = document.createElement('button');

    fullScreenButton.innerHTML='Fullscreen Toggle';

    fullScreenButton.addEventListener('click', () => {
        //To-Do: check browser specific fullscreen API
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
          } else if (document.exitFullscreen) {
            document.exitFullscreen();
          }
    });
    controlDiv.appendChild(fullScreenButton);
}

function setupClickListener(world, container){
    let toggle = false;
    container.addEventListener('click', () => {
        if(toggle){
            world.start();
            toggle= false;
        } else{
            world.stop();
            toggle=true;
        }
    });
}