// Interactive Scene Assignment
// Aamish
// September 16, 2025

//globals
//state var
let worldState = 0; //0- clear-day   1- Cloudy-Day   2-Clear-Night
let brightness = 0;

//cloud vars
let cloudCount = 1;              // number of clouds

//bird vars
let birdColor = 120;
let birdSize = 0.3;
let birdPos = 0;

let bird2_X_offset;
let bird2_Y_offset;

let bird3_X_offset;
let bird3_Y_offset;

//scene color vars

function setup() {
  createCanvas(windowWidth, windowHeight);

  bird2_X_offset = width * 0.085 * birdSize;
  bird2_Y_offset = height * 0.15 * birdSize;

  bird3_X_offset = width * 0.17 * birdSize;
  bird3_Y_offset = height * -0.1 * birdSize;



}

function draw() {
  background(225);
  sun();
  moon();
  clouds();
  baseScene();
  if (worldState === 0) {
    birb();
    birb2();
    birb3();
  }
  moveBird();
  // coord_finder();
  state();
  text("Made By Aamish", width * 0.85, height * 0.9)
  fill(0, brightness);
  rect(0, 0, 10000, 10000);

}

function moveBird() {
  if (keyIsDown(LEFT_ARROW)) {

    birdPos -= map(width, 0, width, 1, 10);
  }
  if (birdPos < (width * 0.2) * -1) {
    birdPos = width * 0.90;
  }
}

function coord_finder() {

  textSize(16);
  text(`x: ${(mouseX / width).toFixed(2)} y: ${(mouseY / height).toFixed(2)}`, mouseX, mouseY);
}



function birb() {

  fill(birdColor);
  //beak
  triangle(
    width * 0.34 * birdSize + birdPos, height * 0.18 * birdSize, // left
    width * 0.387 * birdSize + birdPos, height * 0.185 * birdSize, // bottom
    width * 0.38 * birdSize + birdPos, height * 0.14 * birdSize, // top
  )

  //neck
  triangle(
    width * 0.38 * birdSize + birdPos, height * 0.14 * birdSize, // left
    width * 0.39 * birdSize + birdPos, height * 0.23 * birdSize, // bottom
    width * 0.44 * birdSize + birdPos, height * 0.17 * birdSize, // top
  )

  //front wing left
  triangle(
    width * 0.39 * birdSize + birdPos, height * 0.23 * birdSize, // left
    width * 0.435 * birdSize + birdPos, height * 0.25 * birdSize, // bottom
    width * 0.46 * birdSize + birdPos, height * 0.14 * birdSize, // top
  )

  //front wing mid
  triangle(
    width * 0.435 * birdSize + birdPos, height * 0.25 * birdSize, // left
    width * 0.47 * birdSize + birdPos, height * 0.22 * birdSize, // bottom
    width * 0.46 * birdSize + birdPos, height * 0.14 * birdSize, // top
  )

  //front wing right
  triangle(
    width * 0.46 * birdSize + birdPos, height * 0.14 * birdSize, // left
    width * 0.47 * birdSize + birdPos, height * 0.22 * birdSize, // bottom
    width * 0.56 * birdSize + birdPos, height * 0.16 * birdSize, // top
  )

  //tail
  triangle(
    width * 0.435 * birdSize + birdPos, height * 0.25 * birdSize, // left
    width * 0.54 * birdSize + birdPos, height * 0.28 * birdSize, // bottom
    width * 0.47 * birdSize + birdPos, height * 0.20 * birdSize, // top
  )
  fill(birdColor - 40)
  //back wing right
  triangle(
    width * 0.46 * birdSize + birdPos, height * 0.14 * birdSize, // left
    width * 0.56 * birdSize + birdPos, height * 0.16 * birdSize, // bottom
    width * 0.46 * birdSize + birdPos, height * 0.12 * birdSize, // top
  )

  //back wing right
  triangle(
    width * 0.44 * birdSize + birdPos, height * 0.17 * birdSize, // left
    width * 0.46 * birdSize + birdPos, height * 0.14 * birdSize, // bottom
    width * 0.46 * birdSize + birdPos, height * 0.12 * birdSize, // top
  )
}


function birb2() {

  fill(birdColor);
  //beak
  triangle(
    width * 0.34 * birdSize + birdPos + bird2_X_offset, height * 0.18 * birdSize + bird2_Y_offset, // left
    width * 0.387 * birdSize + birdPos + bird2_X_offset, height * 0.185 * birdSize + bird2_Y_offset, // bottom
    width * 0.38 * birdSize + birdPos + bird2_X_offset, height * 0.14 * birdSize + bird2_Y_offset, // top
  )

  //neck
  triangle(
    width * 0.38 * birdSize + birdPos + bird2_X_offset, height * 0.14 * birdSize + bird2_Y_offset, // left
    width * 0.39 * birdSize + birdPos + bird2_X_offset, height * 0.23 * birdSize + bird2_Y_offset, // bottom
    width * 0.44 * birdSize + birdPos + bird2_X_offset, height * 0.17 * birdSize + bird2_Y_offset, // top
  )

  //front wing left
  triangle(
    width * 0.39 * birdSize + birdPos + bird2_X_offset, height * 0.23 * birdSize + bird2_Y_offset, // left
    width * 0.435 * birdSize + birdPos + bird2_X_offset, height * 0.25 * birdSize + bird2_Y_offset, // bottom
    width * 0.46 * birdSize + birdPos + bird2_X_offset, height * 0.14 * birdSize + bird2_Y_offset, // top
  )

  //front wing mid
  triangle(
    width * 0.435 * birdSize + birdPos + bird2_X_offset, height * 0.25 * birdSize + bird2_Y_offset, // left
    width * 0.47 * birdSize + birdPos + bird2_X_offset, height * 0.22 * birdSize + bird2_Y_offset, // bottom
    width * 0.46 * birdSize + birdPos + bird2_X_offset, height * 0.14 * birdSize + bird2_Y_offset, // top
  )

  //front wing right
  triangle(
    width * 0.46 * birdSize + birdPos + bird2_X_offset, height * 0.14 * birdSize + bird2_Y_offset, // left
    width * 0.47 * birdSize + birdPos + bird2_X_offset, height * 0.22 * birdSize + bird2_Y_offset, // bottom
    width * 0.56 * birdSize + birdPos + bird2_X_offset, height * 0.16 * birdSize + bird2_Y_offset, // top
  )

  //tail
  triangle(
    width * 0.435 * birdSize + birdPos + bird2_X_offset, height * 0.25 * birdSize + bird2_Y_offset, // left
    width * 0.54 * birdSize + birdPos + bird2_X_offset, height * 0.28 * birdSize + bird2_Y_offset, // bottom
    width * 0.47 * birdSize + birdPos + bird2_X_offset, height * 0.20 * birdSize + bird2_Y_offset, // top
  )
  fill(birdColor - 40)
  //back wing right
  triangle(
    width * 0.46 * birdSize + birdPos + bird2_X_offset, height * 0.14 * birdSize + bird2_Y_offset, // left
    width * 0.56 * birdSize + birdPos + bird2_X_offset, height * 0.16 * birdSize + bird2_Y_offset, // bottom
    width * 0.46 * birdSize + birdPos + bird2_X_offset, height * 0.12 * birdSize + bird2_Y_offset, // top
  )

  //back wing right
  triangle(
    width * 0.44 * birdSize + birdPos + bird2_X_offset, height * 0.17 * birdSize + bird2_Y_offset, // left
    width * 0.46 * birdSize + birdPos + bird2_X_offset, height * 0.14 * birdSize + bird2_Y_offset, // bottom
    width * 0.46 * birdSize + birdPos + bird2_X_offset, height * 0.12 * birdSize + bird2_Y_offset, // top
  )
}

function birb3() {

  fill(birdColor);
  //beak
  triangle(
    width * 0.34 * birdSize + birdPos + bird3_X_offset, height * 0.18 * birdSize + bird3_Y_offset, // left
    width * 0.387 * birdSize + birdPos + bird3_X_offset, height * 0.185 * birdSize + bird3_Y_offset, // bottom
    width * 0.38 * birdSize + birdPos + bird3_X_offset, height * 0.14 * birdSize + bird3_Y_offset, // top
  )

  //neck
  triangle(
    width * 0.38 * birdSize + birdPos + bird3_X_offset, height * 0.14 * birdSize + bird3_Y_offset, // left
    width * 0.39 * birdSize + birdPos + bird3_X_offset, height * 0.23 * birdSize + bird3_Y_offset, // bottom
    width * 0.44 * birdSize + birdPos + bird3_X_offset, height * 0.17 * birdSize + bird3_Y_offset, // top
  )

  //front wing left
  triangle(
    width * 0.39 * birdSize + birdPos + bird3_X_offset, height * 0.23 * birdSize + bird3_Y_offset, // left
    width * 0.435 * birdSize + birdPos + bird3_X_offset, height * 0.25 * birdSize + bird3_Y_offset, // bottom
    width * 0.46 * birdSize + birdPos + bird3_X_offset, height * 0.14 * birdSize + bird3_Y_offset, // top
  )

  //front wing mid
  triangle(
    width * 0.435 * birdSize + birdPos + bird3_X_offset, height * 0.25 * birdSize + bird3_Y_offset, // left
    width * 0.47 * birdSize + birdPos + bird3_X_offset, height * 0.22 * birdSize + bird3_Y_offset, // bottom
    width * 0.46 * birdSize + birdPos + bird3_X_offset, height * 0.14 * birdSize + bird3_Y_offset, // top
  )

  //front wing right
  triangle(
    width * 0.46 * birdSize + birdPos + bird3_X_offset, height * 0.14 * birdSize + bird3_Y_offset, // left
    width * 0.47 * birdSize + birdPos + bird3_X_offset, height * 0.22 * birdSize + bird3_Y_offset, // bottom
    width * 0.56 * birdSize + birdPos + bird3_X_offset, height * 0.16 * birdSize + bird3_Y_offset, // top
  )

  //tail
  triangle(
    width * 0.435 * birdSize + birdPos + bird3_X_offset, height * 0.25 * birdSize + bird3_Y_offset, // left
    width * 0.54 * birdSize + birdPos + bird3_X_offset, height * 0.28 * birdSize + bird3_Y_offset, // bottom
    width * 0.47 * birdSize + birdPos + bird3_X_offset, height * 0.20 * birdSize + bird3_Y_offset, // top
  )
  fill(birdColor - 40)
  //back wing right
  triangle(
    width * 0.46 * birdSize + birdPos + bird3_X_offset, height * 0.14 * birdSize + bird3_Y_offset, // left
    width * 0.56 * birdSize + birdPos + bird3_X_offset, height * 0.16 * birdSize + bird3_Y_offset, // bottom
    width * 0.46 * birdSize + birdPos + bird3_X_offset, height * 0.12 * birdSize + bird3_Y_offset, // top
  )

  //back wing right
  triangle(
    width * 0.44 * birdSize + birdPos + bird3_X_offset, height * 0.17 * birdSize + bird3_Y_offset, // left
    width * 0.46 * birdSize + birdPos + bird3_X_offset, height * 0.14 * birdSize + bird3_Y_offset, // bottom
    width * 0.46 * birdSize + birdPos + bird3_X_offset, height * 0.12 * birdSize + bird3_Y_offset, // top
  )
}

function sun() {
  let sunHeight = height * 0.08;
  if (worldState === 0) {
    fill(201, 214, 196);
    circle(width * 0.35, sunHeight, width / 13);
    fill(238, 239, 195);
    circle(width * 0.35, height * 0.08, width / 14);
    fill(254, 250, 188);
    circle(width * 0.35, height * 0.08, width / 15);
  }
}

function moon() {
  let moonHeight = height * 0.08;
  if (worldState === 2) {
    fill(160);
    circle(width * 0.35, moonHeight, width / 13);
    fill(180);
    circle(width * 0.35, height * 0.08, width / 14);
    fill(200);
    circle(width * 0.35, height * 0.08, width / 15);
    fill(160);
    circle(width * 0.37, height * 0.08, width / 50);
    circle(width * 0.34, height * 0.05, width / 70);
    circle(width * 0.35, height * 0.12, width / 85);
  }
}

function clouds() {
  fill(255)



  let spacing = width / cloudCount; // horizontal gap
  let baseY = height * 0.06;   // baseline height

  //for loop to make clouds
  for (let i = 0; i < cloudCount; i++) {
    let x = (mouseX % spacing) + i * spacing; // scroll effect with mouseX
    drawCloud(x, baseY); // draw one cloud group
  }
}

function drawCloud(cx, cy) {
  circle(cx - 12, cy, 25);
  circle(cx, cy, 35);
  circle(cx + 20, cy - 1, 45);
  circle(cx + 42, cy, 35);
}

function mouseClicked() {

  //automatically called on any keyboard button press
  //state var:  0 → 1    1 → 2      
  //            2 → 3 (for 2 seconds) → 0
  if (worldState < 3) {
    worldState++;
    if (worldState === 3) {
      worldState = 0;
    }
  }
}

function state() {
  switch (worldState) {
    case 0:
      brightness = 0;
      cloudCount = 1;
      break;
    case 1:
      brightness = 100;
      cloudCount = 40;
      break;
    case 2:
      brightness = 200;
      cloudCount = 1;
      break;

  }
}

function baseScene() {
  noStroke()





  //background mountains
  fill(102, 143, 172);
  triangle(width * 0, height * 0.47, width * 0.5, height * 0.47, width * 0.17, height * 0.03);
  triangle(width * 0.43, height * 0.46, width * 0.48, height * 0.02, width * 0.72, height * 0.49);
  triangle(width * 0.72, height * 0.49, width * 0.76, height * 0.07, width * 1, height * 0.5);



  //foreground mountains
  fill(128, 160, 184);

  triangle(width * -.01, height * 0.49, width * 0.19, height * 0.15, width * 0.39, height * 0.48);
  triangle(width * 0.32, height * 0.48, width * 0.43, height * 0.26, width * 0.57, height * 0.5);
  triangle(width * 0.51, height * 0.47, width * 0.65, height * 0.23, width * 0.74, height * 0.49);
  triangle(width * 0.6, height * 0.48, width * 0.82, height * 0.26, width * 1, height * 0.5);




  //ground back
  fill(176, 206, 214);
  ellipse(width * 0.72, height * 0.63, width * 0.8, height * 0.4);


  //ground middle
  fill(190, 218, 228);
  ellipse(width * 0.15, height * 0.8, width * 1.2, height * 0.8);

  //ground front
  fill(206, 227, 233);
  ellipse(width * 1.2, height * 1.2, width * 3, height);

  // --- HOUSE ---//

  //front wall
  rectMode(CENTER);
  fill(182, 170, 140);
  rect(width * 0.75, height * 0.84, width * 0.08, height * 0.09)

  //front roof
  fill(136, 123, 88);
  //        bottom left                   top left            top right                 bottom right
  quad(width * 0.71, height * 0.81, width * 0.7, height * 0.78, width * 0.79, height * 0.78, width * 0.80, height * 0.81,);

  // side wall
  fill(158, 145, 113);
  //            top right                  bottom right         bottom left              top left
  quad(width * 0.71, height * 0.81, width * 0.71, height * 0.885, width * 0.70, height * 0.88, width * 0.70, height * 0.78,);

  // roof back
  fill(136, 123, 88);
  quad(width * 0.70, height * 0.78, width * 0.698, height * 0.81, width * 0.9, height * 0.81, width * 0.70, height * 0.81);



  //window
  fill(113, 113, 116);
  rect(width * 0.76, height * 0.85, width * 0.02, height * 0.03);

  //door
  rect(width * 0.73, height * 0.86, width * 0.015, height * 0.05);

  //smoke
  fill(198, 213, 214);
  ellipse(width * 0.77, height * 0.735, width * 0.01, height * 0.07);

  //chimney
  fill(117, 102, 70);
  rect(width * 0.77, height * 0.78, width * 0.01, height * 0.03);




  fill(0)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}