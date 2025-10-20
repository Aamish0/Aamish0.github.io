// Cars Cars Cars
// Aamish
// October 20, 2025

///Globals
let westbound = []; 
let eastbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(220);
  drawRoad();
  let car = new Vehicle(width/2, height/2)
  car.drawCar()
}


function drawRoad(){
rectMode(CORNERS);
fill('green');
rect(0, 0, width, height);

fill(50);
rect(0, height * 0.1, width, height - height * 0.1);

fill('yellow');
let yellowLineSpace = 50;

for( let i = 0; i < width; i+= yellowLineSpace *2){
  rect(i, height/2 - 5, i + yellowLineSpace, height/2 + 5);
}
}

class Vehicle{
  //constructor
  constructor(x, y){
    this.x = x;   this.y = y;
    this.type = round(random(0, 1));
    this.speed;
    this.c = color(random(255), random(255), random(255));
  }

  //methods
  drawCar(){
    let carWidth = 50;
    let carHeight = 35
    fill('red');
    rectMode(CENTER);
    rect(this.x, this.y, carWidth, carHeight);
    fill(0)
    rect(this.x - 16, this.y - 18, 10, 5)
    
  }
  display(){
    
  }

}
