// 2D Array Basics
// Aamish
// November 3, 2025

//0 (black)     255 (white)
//grid is 5x4 in dimension

//Globals

let rndclr = [0, 255];

let maxSquares;


let grid = [[],[]];


let rows;
let cols;

let squareSize = 80;

function setup() {
  // createCanvas(cols*squareSize, rows*squareSize);
  createCanvas(windowWidth, windowHeight);
  randomizeBoard()

  
}

function draw() {
  background(31);
  renderGrid();
  checkWin()
  // print(getCurrentY(), getCurrentX());
}

function randomizeBoard(){
  // grid = [
  //   [random(rndclr),       random(rndclr),    random(rndclr),  random(rndclr), random(rndclr),    random(rndclr),  random(rndclr),       random(rndclr)],
  //   [random(rndclr),       random(rndclr),    random(rndclr),  random(rndclr), random(rndclr),    random(rndclr),  random(rndclr),       random(rndclr)],
  //   [random(rndclr),       random(rndclr),    random(rndclr),  random(rndclr), random(rndclr),    random(rndclr),  random(rndclr),       random(rndclr)],
  //   [random(rndclr),       random(rndclr),    random(rndclr),  random(rndclr), random(rndclr),    random(rndclr),  random(rndclr),       random(rndclr)],
  //   [random(rndclr),       random(rndclr),    random(rndclr),  random(rndclr), random(rndclr),    random(rndclr),  random(rndclr),       random(rndclr)],
  //   [random(rndclr),       random(rndclr),    random(rndclr),  random(rndclr), random(rndclr),    random(rndclr),  random(rndclr),       random(rndclr)],
  //   [random(rndclr),       random(rndclr),    random(rndclr),  random(rndclr), random(rndclr),    random(rndclr),  random(rndclr),       random(rndclr)],
  //   [random(rndclr),       random(rndclr),    random(rndclr),  random(rndclr), random(rndclr),    random(rndclr),  random(rndclr),       random(rndclr)]
  // ];

  for(let i = 0; i < 10; i++){
    grid.push([random(rndclr),       random(rndclr),    random(rndclr),  random(rndclr), random(rndclr),    random(rndclr),  random(rndclr),       random(rndclr)]);
  }

  rows = grid.length;
  cols = grid[0].length;
  maxSquares = rows * cols;
}


function renderGrid(){
  // interpret the information in  the 2D array, 
  // and draw a grid of square on the screen to reflect it.
  for(let x = 0; x < cols; x++){
    for(let y = 0; y < rows; y++){
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*squareSize, y*squareSize, squareSize);
      
    }

  }
}

function mousePressed(){
  //check for win
  

  //flip current tile 
  //upgrade: only do this if mouse is on canvas
  
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
    flip(x, y);
    if(x + 1 < cols) flip(x + 1, y);
    if(y - 1 >= 0) flip(x, y - 1);
    if(x - 1 >= 0) flip(x - 1, y);
    if(y + 1 < rows) flip(x, y + 1);
  }
}

function flip(x, y){
  if (grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;

}

function getCurrentX(){
  //determine current col of mouse position
  let constrainedX = constrain(mouseX, 0, (cols*squareSize) - 1)
  return floor(constrainedX / squareSize);
}

function getCurrentY(){
  //determine current row of mouse position
  let constrainedY = constrain(mouseY, 0, (rows*squareSize) - 1)
  return floor(constrainedY / squareSize);
}

function checkWin(){
  let count = 0;
  for(let x = 0; x < cols; x++){
    for(let y = 0; y < rows; y++){
      if(grid[y][x] === 0){
        count++
        if(count === maxSquares){
          textSize(50);
          fill("lime");
          text("YOU WON", width/2, height/2);
        }
      }
    }
  }
 
 }

