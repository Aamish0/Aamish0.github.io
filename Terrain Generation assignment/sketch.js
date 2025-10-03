// Starter Code for our Terrain Generation Project
// Aamish
// September 29, 2025

let rectWidth = 10;
let timeOff = 0.01;

let panOffset = 0; //A shift value for noise

let x2;
let y2;

let rectHeight;

let avgY = 0;

//position for flag
let highestX, highestY;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //position for flag
  highestX = 0;
  highestY = height;

  background(180);
  generateTerrain();
  
}




function draw() {


  // hold arrow keys to pan over
  let panned = false;

  if (keyIsDown(LEFT_ARROW)) {
    panOffset -= timeOff * rectWidth ; // pan speed
    panned = true;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    panOffset += timeOff * rectWidth; // pan speed
    panned = true;
  }
  if (panned) { // redraw so it doesnt stack over the prevouis terrain
    background(180);
    generateTerrain();
  }

}
  
//function to draw the flag on the highest summit
function drawFlag(x, y){
  stroke('black');
  line(x, y, x, y - 50);
  triangle(x, y - 50, x , y - 25, x + 25, y - 35);
 
}


function generateTerrain(){
  //Use a loop to generate and draw several rectangles side to side 
  //to look like 2D terrain
  rectMode(CORNERS);
  let totalRects = 0;

    highestX = 0;
    highestY = height;

  let xTime = 0; //column number
  for(let x = 0; x < width; x += rectWidth, xTime++){
    //generate a random height.
    

    let newX = xTime * timeOff + panOffset;
    let n = noise(newX); // 
    rectHeight = map(n, 0, 1, height * 0.2, height * 0.9);

    
    
    
    //calculate the coordinates upper-right corner of the rect
    x2 = x + rectWidth;

    y2 = height - rectHeight; 
    stroke('black');
    rect(x, height, x2, y2);

    

    if (y2 < highestY){
      highestY = y2
      highestX = x
      
    }

    avgY += y2; //calculate avg y by adding all the heights of the rects with each draw
    
    stroke('red');
    

    
    totalRects++;
  }
  avgY = avgY/totalRects;
  line(0, avgY, width, avgY); // draw the avg line

  drawFlag(highestX, highestY);
  rectMode(CORNER); // revert to default rect mode
}

//pan the terrain left or right by tapping or holding the left or right arrow keys
function keyPressed(){
  if(keyCode === 100 && rectWidth >= 2){
    rectWidth -= 1;
    background(180);
    generateTerrain();
  }

  else if(keyCode === 102 && rectWidth <= 25){
    rectWidth += 1;
    background(180);
    generateTerrain();
  }

  else if (keyCode === LEFT_ARROW){
    panOffset -= timeOff;
    background(180);
    generateTerrain();


  }
  else if (keyCode === RIGHT_ARROW){
    panOffset += timeOff;
    background(180);
    generateTerrain();
   

  }
}
// if (keyIsPressed && keyCode === SHIFT){
//   rectWidth -= 1;



//scales the scene with the window size dynamcally without having to refresh the page
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(180);
  generateTerrain();
}