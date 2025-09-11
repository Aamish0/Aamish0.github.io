// USer Events + Dat=y 1 Challenge
// Aamish
// Sept 11, 2025
//
// GLOBAL VARIABLES HERE
let circleColor = false;
// declaration    initialization


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(120);
  challenge();  // coordinate system challenge
}

function keyPressed(){
  //this is a special EVENT function.
  //it gets called anytime a keyboard input is pressed

  circleColor = !circleColor

  //how to tell WHICH key was pressed???
}

function challenge(){
  // draw 5 hollow circles, in 4 corners and 
  // center position
  noFill();
  if (circleColor){
    fill(180, 234, 456);
  }
  // circles
  circle(0, 0, 50);
  circle(width, 0, 50);
  circle(0, height, 50);
  circle(width, height, 50);
  circle(width/2, height/2, 50);
}