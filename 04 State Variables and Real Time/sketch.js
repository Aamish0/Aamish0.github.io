// State Variables and real time
// Aamish
// September 18, 2025

//Global Variables
let shapeState = 0; // 0 - cirlce, 1 - square, 2 - triangle, 3 - Transition
let startTime, elapsedTime;


function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis();
}

function draw() {
  //targetting 60 fps
  background(100);
  drawShape();
  manageTimer();
  // print("frame: " + frameCount);
  if (shapeState === 3 && elapsedTime > 2000){
    shapeState = 0;
  }
}

function keyPressed(){
  //automaticaly called on any keyboard button press
  // state var: 0 → 1  , 1 → 2   
  // 2 → 3 (for 2 seconds ) → 0
  if(shapeState < 3){
    shapeState++;
    if (shapeState === 3){
      startTime = millis();
      
    }
  }  
  
}

function manageTimer(){
  //update elapsed time nad display
  // print(millis());
  elapsedTime = millis() - startTime;
  text((elapsedTime/1000).toFixed(2), width/2 - 10, height/2 + 120);
}

function drawShape(){
  //inspect our state variable, and draw 1 of 4 possible options, depending on the current value
  switch(shapeState){
    case 0:
      circle(width/2, height/2, 50);
      break;
    case 1:
      rectMode(CENTER);
      square(width/2, height/2, 50);
      break;
    case 2:
      let x = width/2;      let y = height/2
      triangle(x - 25, y, x + 25, y, x, y -45);
      break;
    case 3:
      
      for(let i = 0; i < 20; i++){
        let x = random(width*0.4, width*0.5);
        let y = random(height*0.4, height*0.5);
        line(x,y, x + 25, y);
      }
      break;
  }
}
