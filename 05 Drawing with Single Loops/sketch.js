// Drawing with Single Loops
// Aamish
// 23 September, 2025


// Globals
let circleSize = 35

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  gradiantBackground();
  circleLine(height * 0.35, 35);
  circleLine(height * 0.5, 55);
  circleLine(height * 0.65, 75);
}

function gradiantBackground(){
  //create a gradiant to use as a background
   let h = 1; //height of each rectangle

   //use a loop (doesnt have to be a WHILE) to draw a vertical stack of rectangles
   let y = 0;
   while (y <= height){
    noStroke();
    let mappedY = map(y, 0, height, 0, 255);
    fill(mappedY, map(mouseX, 0, width, 0, 255), map(mouseY, 0, height, 0, 255));
    rect(0, y, width, h);
    y += h;
   }

}

function cDistance(x1, y1, x2, y2){
  // calculate the straightline distance 
  //between (x1, y1) and (x2, y2)
  let a = abs(x1 - x2);
  let b = abs (y1 - y2);
  let c = sqrt(pow(a,2) + pow(b,2));
  return c.toFixed(1); //keep only 1 decimal place
}


function circleLine(y,circleSize){
  //use this function to draw a line of circles (loop)
  // y → number   the height at which to draw the line
  let xStart = width * 0.1; // → 10% position from the origin on the x-axis
  let xEnd = width * 0.9; // → 90% position from the origin on the x-axis

  for ( let x = xStart; x <= xEnd ; x = x + circleSize){
    let d = cDistance(x,y, mouseX, mouseY);
    if(d <= circleSize/2){
      fill(255, 123, 40);
    }
    else fill(150);

    circle(x, y, circleSize);
    textAlign(CENTER, CENTER)
    fill(0)
    text(d, x, y);
  }
}


