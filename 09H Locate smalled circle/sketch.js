// Locate smalled circle
// Aamish
// October 1, 2025

let NUM_CIRCLE = 40;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background(50);
  
}

function draw() {
  drawCircles()
}


function drawCircles(){
  //draw some random circles
  noFill();
  let smallest_d = Infinity;
  let smallestX, smallestY;

  for(let i = 0; i < NUM_CIRCLE; i++){
    let x = random(0, width);
    let y = random(0, height);
    let d = random(20, 100);
    
    if(d < smallest_d ){
      smallest_d = d;
      smallestX = x;
      smallestY = y;
    }
    
    
    
    circle(x, y, d);
    
  }
  fill('magenta');
  circle(smallestX, smallestY, smallest_d);
}