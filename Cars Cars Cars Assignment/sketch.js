// Cars Cars Cars
// Aamish
// October 20, 2025

///Globals
let westbound = []; 
let eastbound = [];

let car;



function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  car = new Vehicle(width/2, 0);

  for(let i = 0; i < 10; i++){
  westbound.push(new Vehicle(100, 100));
  eastbound.push(new Vehicle(width/2, height/1.25));
  }

  //process COLLECTION of objects
  for(let c of westbound){
    c.move();
    c.display();
  }

  for(let c of eastbound){
    c.move();
    c.display();
  }
}

function draw() {
  background(220);
  drawRoad();

  car.display();
  car.move();
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
    this.speed = 10;
    this.c = color(random(255), random(255), random(255));
    this.dir = round(random(0, 1));

    //decide if car is placed in wesbound lane or east bound lane
    if (this.dir === 0){
      this.y = random(height * 0.1 + 20, height/2 - 20);
      }
      else{
        this.y = random(height/2 + 20, height - height * 0.1 - 20);
      }
  }

  //methods
  drawCar(){
    let carWidth = 50;
    let carHeight = 35
    let carTireOffset = 8
    rectMode(CENTER);
    fill(0)
    rect(this.x - 16, this.y, 10, carHeight + carTireOffset); // front tires
    rect(this.x + 16, this.y, 10, carHeight + carTireOffset); // back tires
    fill('red'); // replace with this.c later
    rect(this.x, this.y, carWidth, carHeight);//car
  }

  drawTruck(){
    let TruckWidth = 70;
    let truckHeight = 40
    let truckTireOffset = 8
    rectMode(CENTER);
    fill(0)
    rect(this.x - 22, this.y, 10, truckHeight + truckTireOffset); // front tires
    rect(this.x + 22, this.y, 10, truckHeight + truckTireOffset); // back tires
    fill('orange'); // replace with this.c later
    rect(this.x, this.y, TruckWidth, truckHeight);//car
    stroke(5);
    line(this.x - 15, this.y - truckHeight/2, this.x - 15, this.y + truckHeight/2);
    noStroke();
  }
    
  
  display(){
    

    //decide if to draw truck or car depending on this.type
    if(this.type === 1){
      this.drawCar();
    }
    else{
      this.drawTruck();
    }
  }
  
  move(){
    if (this.dir === 0){
    this.x -= this.speed;
    if(this.x < 0) this.x = width;   
    }
    else{
      this.x += this.speed;
      if(this.x > width) this.x = 0;   
    }
  }

  action(){

  }

}
