// Child Class #1 - Cirlce
class CircleObject extends AnimatedObject{
  constructor(x, y){
    super(x, y);

    //we can also add-on to what was in the parent class
    this.size = random(20, 40);
  }
  // no mention of move() → it will be same as parent's move()

  display(){ //function oberride; copies overtop of parent version
    if(dist(this.x, this.y, mouseX, mouseY) < this.size/2){
      fill(0, 255, 0);
    }
    else {
      fill(150, 200, 255);
      
    }
    circle(this.x, this.y, this.size);
  }
}

// Child Class #2 - Line
class LineObject extends AnimatedObject{
  constructor(){
    super(random(width), random(height));
  }

  move(){ //combo override, but built on parent version
    super.move(); // this runs the parent's version of move()
    this.x -= 5;
    if(this.x < 0) this.x = width;
  }

  display(){ //full override → no reference to parent's version
    if(mouseIsPressed){
      strokeWeight(12);
    }
    else strokeWeight(2);

    line(this.x, this.y, this.x + 15, this.y);
  }
}