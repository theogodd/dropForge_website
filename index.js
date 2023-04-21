

function setup(){
    // ideallt have the canvas an adaptive size to the window
    createCanvas(900, 600);  
    dropForge = loadImage("assets/dropForge.png");  
}

function draw(){
    image(dropForge, 0, 0, width, height);
}

function keyPressed(){

}