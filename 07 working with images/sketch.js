// Working with images
// Aamish
// September 25, 2025


//Globals
let lionL, lionR;
let facingRight;



function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  loadAssets();
  
}

async function loadAssets(){
  //handle loading all the images
  lionL = await loadImage("assets/IMGs/lion-left.png");
  lionR = await loadImage("assets/IMGs/lion-right.png");
}

function draw() {
  background(220);
  //update direction
  if (pmouseX < mouseX){ //implied moving right
    facingRight = true;
  }
  else if (pmouseX > mouseX){//implies moving left
    facingRight = false;  
  }

  if(facingRight){
    image(lionR, mouseX, mouseY, lionR.width/2, lionR.height/2);
  }
  else {
    image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
  
  }
}

