// Working with Vectors
// Aamish
// October 21, 2025
//useful for modelling forces...


let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(0);
}

function draw() {
  background(31);
  if(mouseIsPressed){
    objects.push(new Ball(mouseX, mouseY));
  }
  for(let o of objects){
    // o.calcMouse();
    o.display();
    o.move();

  }
}

class Ball{
  constructor(x, y){
    this.pos = createVector(x, y);
    this.vel = createVector(random(-5, 5), -5);
    this.grav = createVector(0, 0.2);
  }


  calcMouse(){
    //mouse vector "attractor" calculation
    this.grav = createVector(mouseX, mouseY);
    this.grav.sub(this.pos);
    this.grav.normalize();
    this.grav.mult(1.5);
  }

  move(){
    //update the velocity and position vectors
    this.vel.add(this.grav);
    this.vel.limit(20);
    this.pos.add(this.vel);

    //wall-floor bounce
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x *= -1;
    }

    if(this.pos.y - 20 > height){
      this.vel.y *= -1;
    }
  }

  display(){
    //display Ball
    circle(this.pos.x, this.pos.y, 20);

    //display vectors
    if(true){//??
      stroke(255, 0, 0);
      line(0, 0, this.pos.x, this.pos.y);

      let endX = this.pos.x + this.vel.x;
      let endY = this.pos.y + this.vel.y;
      
      stroke(0, 0, 255);
      line(this.pos.x, this.pos.y, endX, endY);

      stroke(0, 255, 0);
      line(endX, endY, endX + this.grav.x, endY + this.grav.y);
    }
  }

}
