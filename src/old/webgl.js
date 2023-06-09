//window.addEventListener("load", testWebGL);

function drawLine(){
    window.onload = function () {
        const canv = document.getElementById("webGLTest");
        const context = canv.getContext("2d");
    
        context.moveTo(0,0);
        context.lineTo(500,250);
        context.stroke();
    }
}

function drawText(text){
    window.onload = function () {
        const canv = document.getElementById("webGLTest");
        const context = canv.getContext("2d");
    
        context.font = "30px Arial";
        context.fillText(text, 10, 50); 
    }
}


function testWebGL(){
    const canv = document.getElementById("webGLTest");
    const webgl = canv.getContext("webgl");

    if(webgl === null){
        alert("Your browser/computer does not support WebGL");
        return;
    }

    webgl.clearColor(0.0, 0.0, 0.0, 1.0); //set clear color to black, fully opaque
    webgl.clear(webgl.COLOR_BUFFER_BIT);

    setupFullScreen();
}