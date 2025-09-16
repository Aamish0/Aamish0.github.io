// Interactive Scene Assignment
// Aamish
// September 16, 2025



function setup() {
  createCanvas(800, 500);
}

function draw() {
  background(220);
  
  mountain();
  coord_finder()
}

function coord_finder(){
  
  textSize(16);
  text(`x: ${mouseX/width} y: ${mouseY/height}`, mouseX, mouseY);
}

function mountain(){
  //background mountains
  // noStroke()
  
  fill(102, 153, 255);
  triangle(width*0, height*0.47, width*0.5, height*0.47,width*0.17, height*0.03);
  triangle(width*0.43, height*0.46, width*0.48, height*0.02,width*0.72, height*0.49);
  triangle(width*0.72, height*0.49, width*0.76, height*0.07,width*1, height*0.5);

  //foreground mountains
  fill(153, 204, 255);

  triangle(width*-.01, height*0.49, width*0.19, height*0.26,width*0.39, height*0.48);
  triangle(width*0.32, height*0.48, width*0.43, height*0.26,width*0.57, height*0.46);

  
  fill(0)
}