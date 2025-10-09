// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  angleMode(DEGREES);
}

function draw() {
  background(180);
  
  push();
  scale(3)
  strokeWeight(2);
  translate(width/6, height/6);
  circle(0, 0, 150);
  
  
  //hour mark
  for(i = 0; i !== 12; i++){
    line(0, -45, 0, -70);
    rotate(30);
  }

  //minute mark
  strokeWeight(1);
  for(x = 0; x < 360; x += 6){
    line(0, -55, 0, -70);
    rotate(6);
  }


  // time vars
  
  let h = hour() % 12;
  let m = minute();
  let s = second();

  let hourAngle = map(h + m/60, 0, 12, 0, 360);
  let minuteAngle = map(m + s/60, 0, 60, 0, 360);
  let secondAngle = map(s, 0, 60, 0, 360);
  push();
  //hour hand
  strokeWeight(2);
  rotate(hourAngle)
  line(0, 0, 0, -30);
  pop();

  push();
  //minute hand
  rotate(minuteAngle)
  line(0, 0, 0, -50);
  pop();

  push();
  strokeWeight(1);
  //second hand
  rotate(secondAngle)
  line(0, 0, 0, -40);
  pop();
  
  


  pop();
}
