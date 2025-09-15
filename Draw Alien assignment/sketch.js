// Alien draw assignment
// Aamish
// Nomber 15, 2025
//




function setup() {
  createCanvas(500, 500);
  // create slider
  slider = createSlider(1, 8, 1, 1);
  slider.position(10, 10);
  slider.size(80);
  
}

function draw() {
  background(220);
  draw_alien();
}

function draw_alien(){
  // variables
  let centerx = width/2;
  let centery = height/2; 
  let headSize = 2; 
  let offset = slider.value();

  
  noStroke();
  fill(153, 255, 153);
  rectMode(CENTER);
  rect(centerx + offset, centery, 55 *headSize, 60 *headSize, 50 *headSize, 50 *headSize, 5, 5);
  rect(centerx - 25 *headSize + offset, centery + 30 *headSize, 5 *headSize, 20 *headSize);
  rect(centerx + 25 *headSize + offset, centery + 30 *headSize, 5 *headSize, 20 *headSize);
  fill(0)
  circle(centerx - 15 *headSize + offset, centery, 5 *headSize);
  circle(centerx + 15 *headSize + offset, centery, 5 *headSize);
  rect(centerx + offset, centery + 12 *headSize, 25 *headSize, 1)
}
