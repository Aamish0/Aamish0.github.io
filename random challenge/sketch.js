// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let y 
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/6;
}

function ball(){
  
  
  circle(x, y, 50);
  while(y < height/2){
    y++;
  }
}

function draw() {
  background(220);
  strokeWeight(4);
  line(0, height/1.5 , width, height/1.5);
  ball();
}
