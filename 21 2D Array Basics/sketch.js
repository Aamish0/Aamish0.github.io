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
let gridSize = 8;

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
  showHoverOverlay();
  checkWin();
  flipWarning();

}


//randomizes the pattern everytime the game starts
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

//changes the tile-flip mode between 'cross' and 'square' and sets a 2s timer for a warning if cant change mod
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

//lets you know if grid is too small for a 3x3 square flip
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


//checks if all tiles are flipped are the same color and says 'you win' if they are
function checkWin() {
  let allBlack = true;
  let allWhite = true;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] !== 0) allBlack = false;
      if (grid[y][x] !== 255) allWhite = false;
    }
  }

  if (allBlack || allWhite) {
    textAlign(CENTER, CENTER);
    fill('lime');
    textSize(50);
    text("YOU WON!", width / 2, height / 2);
  }
}


 //shows a colored overlay to indicate which rectangles will be impacted on a click
function showHoverOverlay() {
  let x = getCurrentX();
  let y = getCurrentY();


  fill(0, 255, 0, 100); // translucent green overlay

  let gridWidth = cols * squareSize;
  let gridHeight = rows * squareSize;
  let startX = (width - gridWidth) / 2;
  let startY = (height - gridHeight) / 2;

  // Always highlight the main clicked square
  // If Shift is held, only show the hovered square
  if (keyIsDown(SHIFT)) {
    rect(startX + x * squareSize, startY + y * squareSize, squareSize, squareSize);
  }
  else{
    rect(startX + x * squareSize, startY + y * squareSize, squareSize, squareSize);
    if (flipMode === "cross") {
      let offsets = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];

      for (let i = 0; i < offsets.length; i++) {
        let dx = offsets[i][0];
        let dy = offsets[i][1];

        let nx = x + dx;
        let ny = y + dy;

        if (nx >= 0 && nx < cols && ny >= 0 && ny < rows) {
          rect(startX + nx * squareSize, startY + ny * squareSize, squareSize, squareSize);
        }
      }
    }

    else if (flipMode === "square") {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          let nx = x + j;
          let ny = y + i;
          if (nx >= 0 && nx < cols && ny >= 0 && ny < rows) {
            rect(startX + nx * squareSize, startY + ny * squareSize, squareSize, squareSize);
          }
        }
      }
    }
  }
}
