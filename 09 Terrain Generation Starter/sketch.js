// Starter Code for our Terrain Generation Project
// Aamish
// September 29, 2025

let rectWidth = 2;
let timeOff = 0.01;
let xTime = 0;
let panOffset = 0; //starting pan pos 

let x2;
let y2;

let rectHeight;

//position for flag
let highestX;
let highestY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //for now, generate the terrain once

  //position for flag
  highestX = 0;
  highestY = height;

  background(180);
  generateTerrain();
  
}

function draw() {
  // dont need to use draw UNTIL animating the terrain
  
  
}
function drawFlag(x, y){
  
  line(x, y, x, y - 50);
  triangle(x, y - 50, x , y - 25, x + 25, y - 35);
 
}


function generateTerrain(){
  //Use a loop to generate and draw several rectangles side to side 
  //to look like 2D terrain
  rectMode(CORNERS);
  stroke(0);

  for(let x = 0; x < width; x += rectWidth){
    //generate a random height.
    rectHeight = noise(xTime + panOffset);
    rectHeight = map(rectHeight, 0, 1, height * 0.2, height * 0.9);

    
    
    
    //calculate the coordinates upper-right corner of the rect
    x2 = x + rectWidth;

    y2 = height - rectHeight; 

    rect(x, height, x2, y2);

    

    if (y2 < highestY){
      highestY = y2
      highestX = x
      
    }


    xTime += timeOff;
  }
  drawFlag(highestX, highestY);
  rectMode(CORNER); // revert to default rect mode
}


function keyPressed(){
  if (keyCode === LEFT_ARROW){
    panOffset -= 0.1;
    highestX = 0;
    highestY = height;
    background(180);
    generateTerrain();
    drawFlag(highestX, highestY);
  }
  else if (keyCode === RIGHT_ARROW){
    panOffset += 0.1;
    highestX = 0;
    highestY = height;
    background(180);
    generateTerrain();
    drawFlag(highestX, highestY);
  }
}




//scales the scene with the window size dynamcally without having to refresh the page
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}