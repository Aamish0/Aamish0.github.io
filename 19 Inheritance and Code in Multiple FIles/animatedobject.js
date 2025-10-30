// Parent Class ("SUPER Class")
// --- if all in one file, should occur first ---

class AnimatedObject{
    constructor(x, y){
      this.x = x;   this.y = y;
      this.size = 6;
    }
  
    move(){ // add a "wiggle effect"
      this.x += random(-6, 6);
      this.y += random(-6, 6);
    }
  
    display(){
      strokeWeight(this.size);
      stroke(random(255), random(255), random(255))
      point(this.x, this.y)
    }
  
  }