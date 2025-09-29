// Starter Code for our Terrain Generation Project
// Aamish
// September 29, 2025

let rectWidth = 1;
let timeOff = 0.01;
let xTime = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  //for now, generate the terrain once
  background(180);
  generateTerrain();
  
}

function draw() {
  // dont need to use draw UNTIL animating the terrain
  
  
}

function generateTerrain(){
  //Use a loop to generate and draw several rectangles side to side 
  //to look like 2D terrain
  rectMode(CORNERS);

  for(let x = 0; x < width; x += rectWidth){
    //generate a random height.
    let rectHeight = noise(xTime);
    rectHeight = map(rectHeight, 0, 1, height * 0.2, height * 0.9);
    

    //calculate the coordinates upper-right corner of the rect
    let x2 = x + rectWidth;

    let y2 = height - rectHeight; 

    rect(x, height, x2, y2);
    xTime += timeOff;
  }
  rectMode(CORNER); // revert to default rect mode
}


function keyPressed(){
  if (keyCode === LEFT_ARROW){
    xTime -= 0.01;
    background(180);
    generateTerrain();
  }
  else if (keyCode === RIGHT_ARROW){
    xTime += 0.01;
    background(180);
    generateTerrain();
  }
}