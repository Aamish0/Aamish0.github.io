// CSS Centering and 3D Fractals
// Aamish
// December 5, 2025
//

let angle;

function setup() {
  createCanvas(800, 600, WEBGL);
}

function draw() {
  background(31);
  orbitControl();
  lights();
  fill(100, 255, 200);
  if(!mouseIsPressed){
    angle = map(mouseX, 0, width, -120, 120);
  }
  for(let i = 0; i < 360; i+= 45){
    push();
    rotateY(radians(i));
    drawBox(50)
    pop();
  }
  
  

}


function drawBox(size){
  if(size > 3){
    rotateZ(radians(angle));
    translate(size * 1.5, 0);
    box(size);
  
  drawBox(size * 0.8);

  }
}