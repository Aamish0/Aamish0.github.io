// Block Pusher Starter
// Aamish
// November 7, 2025

tiles = [];  //0→grass  1→chicken  2→cow  3→star
let level = [
  [0, 1, 0, 3, 0],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0]
];

let playerX = 3;   let playerY = 4;
let rows = level.length;
let cols = level[0].length;
let tile_size = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
  level[playerY][playerX] = 2;
}

async function loadAssets(){
  //load our four (or more) tile images
  for(let i = 0; i < 4; i++){
    tiles.push(await loadImage("assets/"+i+".png"));
  }
}

function draw() {
  background(31);
  renderBoard();

}

function swap(x1, y1, x2, y2){
  //modify the gameboard: switch 2 tiles
  let temp = level[y1][x1];
  level[y1][x1] = level [y2][x2];
  level[y2][x2] = temp;
}

function keyPressed(){
  //enact a single action per keypress
  if(key === 'a'){
    if(playerX > 0){ //make sure not on left edge
      if(level[playerY][playerX-1] === 0){  //Grass, so swap
        swap(playerX, playerY, playerX - 1, playerY);
      playerX--;
      }
      else if(level[playerY][playerX-1] === 1){ //chicken
        //check to see there is ROOM for it to be pushed
        //check to see if there is grass beyond the chicken
        if(playerX > 1 && level[playerY][playerX-2] === 0){
          //swap grass-chicken
          //swap grass-cow
          swap(playerX-1, playerY, playerX-2, playerY);
          swap(playerX, playerY, playerX-1, playerY);
          playerX--;
        }
      }
    }
  }
  if(key === 'd'){
    swap(playerX, playerY, playerX + 1, playerY);   
    playerX++;
  }
  if(key === 'w'){
    swap(playerX, playerY, playerX, playerY - 1);
    playerY--;
  }
  if(key === 's'){
    swap(playerX, playerY, playerX, playerY + 1);
    playerY++;
  }
}



function renderBoard(){
  // interpret the data in our 2D array, place
  // images on the canvas.
  for(let x = 0; x < cols; x++){
    for(let y = 0; y < rows; y++){
      let imgIndex = level[y][x];
      let currentImage = tiles[imgIndex];
      image(currentImage, x*tile_size, y*tile_size);
    }
  }
}