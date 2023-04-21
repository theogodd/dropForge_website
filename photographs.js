// p5.js page for loading in the file of images
let imagesAmount, 
    StillImages = [];

function setup(){
    // ideallt have the canvas an adaptive size to the window
    createCanvas(900, 600);  
}

function loadImages(){
    // imagesAmount = 66;

    // for(var i = 1; i < imagesAmount; i++){
    //     // imgName give the images in StillImages a name to be referenced
    //     var imgName = `${'0000'+i).slice(-3)}`;
    //     dropForge = loadImage(`assets/imagesForPage/${('000'+i).slice(-3)}.jpg`);  
    //     StillImages.push(still_input1);
    //     StillImages[imgName] = still_input1;
    // }
}

function draw(){
    image(dropForge, 0, 0, width, height);
}

function keyPressed(){

}