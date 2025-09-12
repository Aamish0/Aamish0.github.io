// USer Events + Dat=y 1 Challenge
// Aamish
// Sept 11, 2025
//

// GLOBAL VARIABLES HERE
// can only work with "simple" data in this section of code
// No system variables are available until in setup(), ... after canvas is made
let circleColor = false;
let currentCoror = "red";
let x; let y;
let tSize = 50; // for text font size
// declaration    initialization




function setup() {
  createCanvas(400, 400);
  x = width/2 ;
  y = height * 0.75;
}

function draw() {
  background(120);
  challenge();  // coordinate system challenge
  movement();
  rect(x, y, 60, 40);
}

function mouseReport(){
  //inspect some of the built ins (system varaibles) for working with a mouse
  let src = mouseX + ", " + mouseY + ", " + mouseIsPressed + ", " + mouseButton;
  textSize(tSize);
  text(src, mouseX, mouseY);

  if(mousePressed){
    // function that is automatically called once per mouse interaction
    tSize = random(10, 50);
  }
}






function movement(){
  //check for keyboard presses each frame
  //and move the rect accordingly
  // if (keyCode === "RIGHT_ARROW" && keyIsPressed ) x += 5;
  // else if (keyCode === "LEFT_ARROW" && keyIsPressed) x -= 5;

  if (keyIsDown(UP_ARROW)) y -= 5;
  if (keyIsDown(DOWN_ARROW)) y += 5;
  if (keyIsDown(LEFT_ARROW)) x -= 5;
  if (keyIsDown(RIGHT_ARROW)) x += 5;
}


  





















function keyPressed(){
  //this is a special EVENT function.
  //it gets called anytime a keyboard input is pressed

  //how to tell WHICH key was pressed???
  if (key === "p") currentCoror = "green"
  else if (keyCode === CONTROL && key === "A") currentColor = "blue"
  circleColor = !circleColor

  
}
  


function challenge(){
  // draw 5 hollow circles, in 4 corners and 
  // center position
  noFill();
  if (circleColor){
    fill(currentCoror);
  }
  // circles
  circle(0, 0, 50);
  circle(width, 0, 50);
  circle(0, height, 50);
  circle(width, height, 50);
  circle(width/2, height/2, 50);
}