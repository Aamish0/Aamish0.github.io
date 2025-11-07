// 2D Array Basics
// Aamish
// November 3, 2025

//0 (black)     255 (white)
//grid is 5x4 in dimension

//Globals

let rndclr = [0, 255];

let maxSquares;

let flipMode = "cross"; //or square

let grid = [];
let gridSize = 4;

let canFlipSquare = false;
let rows;
let cols;

let squareSize = 80;

let warningTimer = 0;


function setup() {
  // createCanvas(cols*squareSize, rows*squareSize);
  createCanvas(windowWidth, windowHeight);
  randomizeBoard(gridSize)

  if(gridSize >= 6){
    canFlipSquare = true;
  }
  else canFlipSquare = false;
  
}

function draw() {
  background(31);
  renderGrid();
  checkWin()
  flipWarning()

}

function randomizeBoard(size) {
  grid = [];

  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push(random(rndclr));
    }
    grid.push(row);
  }

  rows = cols = size;
  maxSquares = rows * cols;
}

function renderGrid(){
  // interpret the information in  the 2D array, 
  // and draw a grid of square on the screen to reflect it.
  let gridWidth = cols * squareSize;
  let gridHeight = rows * squareSize;
  let startX = (width - gridWidth) / 2;
  let startY = (height - gridHeight) / 2;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      fill(grid[y][x]);
      square(startX + x * squareSize, startY + y * squareSize, squareSize);
    }
  }
}

function keyPressed(){
  if (key === ' ') {
    if (flipMode === "cross" && canFlipSquare) {
      flipMode = "square";
    } else if (flipMode === "cross" && !canFlipSquare) {
      warningTimer = 120; //2 seconds on 60fps
    } else {
      flipMode = "cross";
    }
  }
}

function flipWarning(){
    if (warningTimer > 0) {
    warningTimer--;
    fill("red");
    textAlign(CENTER, CENTER);
    textSize(24);
    text("Grid too small to use square flip!", width / 2, height - 50);
  }
}



function mousePressed(){

  let x = getCurrentX();
  let y = getCurrentY();

  //ALWAYS: Flip the "focused" tile
  // IF THEY EXIST:
  // Flip our NSEW neighbours (cross pattern)
  
  // flip(x - 1, y)
  // flip(x, y + 1)
  // flip(x, y - 1)



  if (keyIsDown(SHIFT)){
    flip(x, y);
  }
  else{
    if(flipMode === "cross"){
    flip(x, y);
    if(x + 1 < cols) flip(x + 1, y);
    if(y - 1 >= 0) flip(x, y - 1);
    if(x - 1 >= 0) flip(x - 1, y);
    if(y + 1 < rows) flip(x, y + 1);
    }

    else if (flipMode === "square") {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          let nx = x + j;
          let ny = y + i;
          if (nx >= 0 && nx < cols && ny >= 0 && ny < rows) {
            flip(nx, ny);
          }
        }
      }
    }
  }
}

function flip(x, y){
  if (grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;

}

function getCurrentX(){
  //determine current col of mouse position
  let gridWidth = cols * squareSize;
  let startX = (width - gridWidth) / 2;
  let constrainedX = constrain(mouseX - startX, 0, gridWidth - 1);
  return floor(constrainedX / squareSize);
}

function getCurrentY(){
  //determine current row of mouse position
  let gridHeight = rows * squareSize;
  let startY = (height - gridHeight) / 2;
  let constrainedY = constrain(mouseY - startY, 0, gridHeight - 1);
  return floor(constrainedY / squareSize);
}

function checkWin(){
  let count = 0;
  for(let x = 0; x < cols; x++){
    for(let y = 0; y < rows; y++){
      if(grid[y][x] === 0){
        count++
        if(count === maxSquares){
          textAlign(CENTER, CENTER);
          fill('lime');
          textSize(50);
          text("YOU WON!", width / 2, height / 2);
        }
      }
    }
  }
 
 }

