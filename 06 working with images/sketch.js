// 06 working with images and Random and Noise()
// Aamish
// september 24, 2025

//globals
let x1, y1, x2, y2
let d1, d2 //diameter
let noiseTime = 6, noiseSpeed = 0.01;
let noiseTime2 = 3, noiseSpeed2 = 0.009;
// noiseSpeed controls how connected our randome noise() values are


let minSize = 5;    let maxSize = 200;

let mX, mY; //move x and y


function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width * 0.3;     y1 = height * 0.5;
  x2 = width * 0.7;     y2 = height * 0.5;
  mY = height * 0.3
  
}

function draw() {
  background(50);
  // randomCircle();
  noiseCircle();
  noiseMove();
}

function noiseMove(){
  //use random noise to set the x-pos of a third ciecle
  x2 = noise(noiseTime2);
  x2 = map(x2, 0, 1, 0, width);
  y2 = noise(noiseTime2);
  y2 = map(y2, 0, 1, 0, height);
  noiseTime2 += 0.01
}


function randomCircle(){
  //draw a fixed circle with randomly changing diameter
  fill(50, 150, 250);
  d1 = random(minSize, maxSize);
  circle(x1, y1, d1);
}

function noiseCircle(){
  //draw fixed circle with randomly changing (but smooth) diameters
  d2 = noise(noiseTime); //yields value between 0-1
  d2 = map(d2, 0, 1, minSize, maxSize);
  fill(215, 115, 15);
  circle(x2, y2, d2);
  noiseTime += noiseSpeed;
}