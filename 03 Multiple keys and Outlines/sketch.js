// Multiple keys and Outlines
// Aamish
// November 15, 2025


// keysIsDown() → returns boolean 

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(220);
  check_Multi();
}

function check_Multi(){

  strokeWeight(mouseX / 10)
  stroke(255, 0, 0)
  //check for multiple key pressed (3 simultaniuos)
  let a = keyIsDown(65); // "a"
  let b = keyIsDown(66); // "b"
  let c = keyIsDown(67); // "c"
  textSize(40);
  text("a: " + a + "\tb: " + b + "\tc:" + c, 100, 300);
}

