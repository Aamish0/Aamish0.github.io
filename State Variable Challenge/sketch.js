// state variable extra challenge
// Aamish
// 6 October, 2025

//Globals
let direction = 1;    // 0 → right,   1 → down    2 → left    3 → up
let rectPosX = 20; let rectPosY = 20;

let rectSize = 25;
let speed = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
}

function draw() {
  background(50);
  drawSquare();
  stateChanger();
  stateManager();
}

function drawSquare(){
  rect(rectPosX, rectPosY, rectPosX + rectSize, rectPosY + rectSize);
}

function stateChanger(){
  if (direction === 3 && rectPosY < 0){
    rectPosY = 0;
    direction = 0;
  }

  if (rectPosX > width - rectSize && rectPosY < rectSize){
    direction = 1;
    rectPosX = width - rectSize;
  }
  
  else if (rectPosX > width - rectSize && rectPosY > height - rectSize){
    direction = 2;
  }
  
  else if (rectPosX < rectSize && rectPosY > height - rectSize){
    direction = 3;
  }
}

function stateManager(){
  switch(direction){
    case 0:
      rectPosX += speed;
      break;

    case 1:
      rectPosY += speed;
      break;

    case 2:
      rectPosX -= speed;
      break;
    case 3:
      rectPosY -= speed;
      break;
  }
}