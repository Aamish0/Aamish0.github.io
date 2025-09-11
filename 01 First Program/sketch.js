// Aamish
// Interactive Programs

function setup() { // runs ONCE at the start
  createCanvas(windowWidth, windowHeight);
}

function draw() { // runs OVER and OVER
                  // targeting 60 fps
  background(220);
  fill(255, 255, 0);
  circle(mouseX, mouseY, 30);
}
