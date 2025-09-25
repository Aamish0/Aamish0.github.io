// Interactive Scene Assignment
// Aamish
// September 16, 2025

//globals
let cloud_distance = [70, 10];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(225);
  
  mountain();
  coord_finder()
}

function coord_finder(){
  
  textSize(16);
  text(`x: ${(mouseX/width).toFixed(2)} y: ${(mouseY/height).toFixed(2)}`, mouseX, mouseY);
}

function mountain(){
  noStroke()
//sun
fill(201, 214, 196);
circle(width*0.35, height*0.08, width / 13);
fill(238, 239, 195);
circle(width*0.35, height*0.08, width / 14);
fill(254, 250, 188);
circle(width*0.35, height*0.08, width /15);


  

  //background mountains
  fill(102, 143, 172);
  triangle(width*0, height*0.47, width*0.5, height*0.47,width*0.17, height*0.03);
  triangle(width*0.43, height*0.46, width*0.48, height*0.02,width*0.72, height*0.49);
  triangle(width*0.72, height*0.49, width*0.76, height*0.07,width*1, height*0.5);

  //clouds
  
  fill(255)
  //cloud 1
  circle(mouseX-12, height * 0.06, 25);
  circle(mouseX, height * 0.06, 35);
  circle(mouseX+20, height * 0.05, 45);
  circle(mouseX+ 42, height * 0.06, 35);

  //cloud 2
  circle(mouseX-12 - cloud_distance[0], height * 0.06 + cloud_distance[1], 25);
  circle(mouseX - cloud_distance[0], height * 0.06 + cloud_distance[1], 35);
  circle(mouseX+20 - cloud_distance[0], height * 0.05 + cloud_distance[1], 45);
  circle(mouseX+ 42 - cloud_distance[0], height * 0.06 + cloud_distance[1], 35);

  //cloud 3
  circle(mouseX-8 + cloud_distance[0], height * 0.06 + cloud_distance[1], 25);
  circle(mouseX - 4 + cloud_distance[0], height * 0.06 + cloud_distance[1], 35);
  circle(mouseX+16 + cloud_distance[0], height * 0.05 + cloud_distance[1], 45);
  circle(mouseX - 4+ 42 + cloud_distance[0], height * 0.06 + cloud_distance[1], 35);

  //cloud 4
  circle(mouseX, height * 0.08, 25);
  circle(mouseX - 12, height * 0.08, 35);
  circle(mouseX+8, height * 0.07, 45);
  circle(mouseX+ 32, height * 0.08, 35);

  //foreground mountains
  fill(128, 160, 184);

  triangle(width*-.01, height*0.49, width*0.19, height*0.15, width*0.39, height*0.48);
  triangle(width*0.32, height*0.48, width*0.43, height*0.26,width*0.57, height*0.5);
  triangle(width*0.51, height*0.47, width*0.65, height*0.23,width*0.74, height*0.49);
  triangle(width*0.6, height*0.48, width*0.82, height*0.26,width*1, height*0.5);




//ground back
fill(176, 206, 214);
ellipse(width*0.72, height*0.63, width*0.8, height*0.4);


//ground middle
fill(190, 218, 228);
ellipse(width*0.15, height*0.8, width*1.2, height*0.8);

//ground front
fill(206, 227, 233);
ellipse(width*1.2, height*1.2, width*3, height);

// --- HOUSE ---//

//front wall
rectMode(CENTER);
fill(182, 170, 140);
rect(width*0.75, height * 0.84, width* 0.08, height * 0.09)

//front roof
fill(136, 123, 88);
//        bottom left                   top left            top right                 bottom right
quad(width*0.71, height*0.81, width*0.7, height*0.78, width*0.79, height*0.78, width*0.80, height*0.81,);

// side wall
fill(158, 145, 113);
//            top right                  bottom right         bottom left              top left
quad(width*0.71, height*0.81, width*0.71, height*0.885, width*0.70, height*0.88, width*0.70, height*0.78,);

// roof back
fill(136, 123, 88);
quad(width *0.70 , height * 0.78, width * 0.698, height * 0.81, width * 0.9, height * 0.81, width * 0.70, height * 0.81);



//window
fill(113, 113, 116);
rect(width *0.76 , height * 0.85, width *0.02 , height * 0.03);

//door
rect(width *0.73 , height * 0.86, width *0.015 , height * 0.05);

//smoke
fill(198, 213, 214);
ellipse(width *0.77 , height * 0.735, width *0.01 , height * 0.07);

//chimney
fill(117, 102, 70);
rect(width *0.77 , height * 0.78, width *0.01 , height * 0.03);




  fill(0)
}