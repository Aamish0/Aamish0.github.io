// objects recreation challenge
// Aamish


//Globals
let mySquare;
let squareCollection = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  mySquare = new Square(width/2, height/2);
}

function draw() {
  background(50);
  mySquare.move()
  mySquare.display();

  if(mouseIsPressed){
    squareCollection.push(new Square(mouseX, mouseY));
  }

  for(let s of squareCollection){
    s.move();
    s.display();
    
  }
}

class Square {
  //Constructor
  constructor(x, y){
    this.x = x;   this.y = y;
    this.c = color(random(255), random(255), random(255));
    this.w = random(15, 25);
    this.h = random(15, 25);
    this.speed = random(5, 15);
  }

  display(){
    fill(this.c);
    rect(this.x, this.y, this.w, this.h)
  }

  move(){
    this.y += this.speed;
    
  }

}