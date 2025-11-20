// Image excercises samples
// Aamish
// November 14, 2025

let myImage;
let nuit;
let hand;

async function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  chip = loadImage("assets/chip.jpg");
  nuit = loadImage("assets/nuit.jpg");
  hand = loadImage("assets/hand.jpg");
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

function rgbWinner() {
  for (let i = 0; i < pixels.length; i += 4) {
    let r = pixels[i];
    let g = pixels[i + 1];
    let b = pixels[i + 2];


    let winner;

    // Check ties and max
    if (r >= g && r >= b) {
      winner = "r";
    } else if (g >= b) {
      winner = "g";
    } else {
      winner = "b";
    }

    // Apply winning color
    if (winner === "r") {
      pixels[i] = 255; pixels[i+1] = 0;   pixels[i+2] = 0;
    } else if (winner === "g") {
      pixels[i] = 0;   pixels[i+1] = 255; pixels[i+2] = 0;
    } else {
      pixels[i] = 0;   pixels[i+1] = 0;   pixels[i+2] = 255;
    }
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
  for(let i = 0; i < pixels.length; i += 4){
    let r; let g; let b;
      r = pixels[i];
      g = pixels[i+1];
      b = pixels[i+2];
    let avg = (r + g + b)/3

    if(avg >= 0 && avg <= 54){
      pixels[i] = 90;
      pixels[i+1] = 10;
      pixels[i+2] = 50;
    }

    else if(avg >= 55 && avg <= 104){
      pixels[i] = 130;
      pixels[i+1] = 30;
      pixels[i+2] = 130;
    }

    else if(avg >= 105 && avg <= 154){
      pixels[i] = 120;
      pixels[i+1] = 180;
      pixels[i+2] = 60;
    }

    else if(avg >= 155 && avg <= 204){
      pixels[i] = 105;
      pixels[i+1] = 150;
      pixels[i+2] = 210;
    }

    else if(avg >= 205 && avg <= 255){
      pixels[i] = 170;
      pixels[i+1] = 230;
      pixels[i+2] = 220;
    }
  }
}

function mirror() {

  for (let y = 0; y < height; y++) {
    for (let x = width/2; x < width; x++) {

      let i = (y * width + x) * 4;

      let mirrorX = width - 1 - x; 
      let mirrorPixelIndex = (y * width + mirrorX) * 4;

      pixels[mirrorPixelIndex]   = pixels[i];     // R
      pixels[mirrorPixelIndex+1] = pixels[i+1];   // G
      pixels[mirrorPixelIndex+2] = pixels[i+2];   // B
      pixels[mirrorPixelIndex+3] = pixels[i+3];   // A
    }
  }
}



function draw() {
  background(220);
  image(hand, 0, 0);
  loadPixels(); // populate the pixels array
  
  // colorEffect();
  // noGreen()
  // posterize();
  // rgbWinner();
  mirror();


  updatePixels();
}

