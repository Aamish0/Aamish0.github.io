// Object-Object Interactions
// Aamish
// October 16, 2025


//Globals
let nodes = [];
let reach = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  //create 1 node per mouse press
  for(let i = 0; i < random(1, 5); i++){
    nodes.push(new csNode(mouseX, mouseY));
  }
  
}


function draw() {
  background(50);
  //loop by item → when we dont plan on deleting items from an array. 
  //Otherwise loop by index
  for(let n of nodes){
    n.move();
    n.display();
    n.connect(nodes);
  }
}

class csNode{
  //1. Contructor
  constructor(x, y){ 
    //properties related to position/display
    this.x = x;   this.y = y;   this.size = random(0, 8);
    this.c = color(random(255), random(255), random(255));

    //properties related to movement
    this.xTime = random(10);    this.yTime = random(10);
    this.timeShift = 0.01; this.maxSpeed = 15;


  }
  //2. Class methods
  display(){    //draw pur csNode as a circle on the canvas
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.size);
  }

  move(){
    //use perlin noise for x/y movement
    let xSpeed = noise(this.xTime); //0 - 1
    xSpeed = map(xSpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.xTime += this.timeShift;

    this.x += xSpeed;

    if(this.x < 0) this.x = width;
    else if ( this.x > width) this.x = 0;

    //----- now the same for y ---

    
    let ySpeed = noise(this.yTime); //0 - 1
    ySpeed = map(ySpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.yTime += this.timeShift;

    this.y += ySpeed;

    if(this.y < 0) this.y = height;
    else if ( this.y > height) this.y = 0;
  }

  connect(nodesArray){
    //check if the current point is close to any other points
    //if so, join with a line
    stroke(this.c);
    for(let n of nodesArray){ 
      //gives access to this.x and this.y of the object → this.y, this.y, n.x, n.y
      if(n !== this){//make sure not to compare to self
        let d = dist(this.x, this.y, n.x, n.y);
        if(d < reach){//close enough
          line(this.x, this.y, n.x, n.y);
        }
      }
      

    }
    
  }
}