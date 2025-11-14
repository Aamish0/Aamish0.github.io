// Image excercises samples
// Aamish
// November 14, 2025

let myImage

async function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  myImage = loadImage("assets/chip.jpg");
} 

// for each pixel, remove the red component (set to 0);
//                      halve the blue component


function colorEffect(){
  //use the single loop strategy
  for(let i = 0; i < pixels.length; i += 4){
    pixels[i] = 0;                    //R
    pixels[i+2] = pixels[i+2] / 2    //B
  }
}

function noGreen(){
  for(let i = 0; i < pixels.length; i += 4){
    if(pixelnum > width/2){
      pixels[i+1] = 0   
    }
  }
}

function getAvg(x, y) {
  //return the avg intensity of pixel (x,y);
  let i = (width * y + x) * 4
  let r = pixels[i];
  let g = pixels[i + 1];
  let b = pixels[i + 2];
  return (r + g + b) / 3
}

function posterize(){
  for(let x = 0; x < pixels.length; x += 4){

  }
}

function draw() {
  background(220);
  image(myImage, 0, 0);
  loadPixels(); // populate the pixels array

  // colorEffect();// replace with each different excercise
  // noGreen()



  updatePixels();
}

