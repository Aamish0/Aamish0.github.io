// Noise and Objects
// Aamish
// 25 September, 2025



let ball, ball2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = {   //object notation. Inside the brackets
             //set up a bunch of 
             //property:value   pairs
    x: 300,  y: 400,  size: 20,
    c: color(random(255),random(255),random(255)),
    timeX: random(100),  timeY: random(100),
    timeOff: 0.02
  };

  ball2 = {   //object notation. Inside the brackets
             //set up a bunch of 
             //property:value   pairs
    x: 500,  y: 200,  size: random(20, 40),
    c: color(random(255),random(255),random(255)),
    timeX: random(100),  timeY: random(100),
    timeOff: 0.005
  };

  ball3 = {   //object notation. Inside the brackets
    //set up a bunch of 
    //property:value   pairs
x: 500,  y: 200,  size: random(20, 40),
c: color(random(255),random(255),random(255)),
timeX: random(100),  timeY: random(100),
timeOff: 0.005
};

ball4 = {   //object notation. Inside the brackets
  //set up a bunch of 
  //property:value   pairs
x: 500,  y: 200,  size: random(20, 40),
c: color(random(255),random(255),random(255)),
timeX: random(100),  timeY: random(100),
timeOff: 0.005
};

ball5 = {   //object notation. Inside the brackets
  //set up a bunch of 
  //property:value   pairs
x: 500,  y: 200,  size: random(20, 40),
c: color(random(255),random(255),random(255)),
timeX: random(100),  timeY: random(100),
timeOff: 0.005
};

ball6 = {   //object notation. Inside the brackets
  //set up a bunch of 
  //property:value   pairs
x: 500,  y: 200,  size: random(20, 40),
c: color(random(255),random(255),random(255)),
timeX: random(100),  timeY: random(100),
timeOff: 0.005
};

ball7 = {   //object notation. Inside the brackets
  //set up a bunch of 
  //property:value   pairs
x: 500,  y: 200,  size: random(20, 40),
c: color(random(255),random(255),random(255)),
timeX: random(100),  timeY: random(100),
timeOff: 0.005
};
ball8 = {   //object notation. Inside the brackets
  //set up a bunch of 
  //property:value   pairs
x: 500,  y: 200,  size: random(20, 40),
c: color(random(255),random(255),random(255)),
timeX: random(100),  timeY: random(100),
timeOff: 0.005
};
ball9 = {   //object notation. Inside the brackets
  //set up a bunch of 
  //property:value   pairs
x: 500,  y: 200,  size: random(20, 40),
c: color(random(255),random(255),random(255)),
timeX: random(100),  timeY: random(100),
timeOff: 0.005
};
ball10 = {   //object notation. Inside the brackets
  //set up a bunch of 
  //property:value   pairs
x: 500,  y: 200,  size: random(20, 40),
c: color(random(255),random(255),random(255)),
timeX: random(100),  timeY: random(100),
timeOff: 0.005
};
ball11 = {   //object notation. Inside the brackets
  //set up a bunch of 
  //property:value   pairs
x: 500,  y: 200,  size: random(20, 40),
c: color(random(255),random(255),random(255)),
timeX: random(100),  timeY: random(100),
timeOff: 0.005
};
ball12 = {   //object notation. Inside the brackets
  //set up a bunch of 
  //property:value   pairs
x: 500,  y: 200,  size: random(20, 40),
c: color(random(255),random(255),random(255)),
timeX: random(100),  timeY: random(100),
timeOff: 0.005
};
}

function draw() {
  // TRICK #1 → comment out background
  // background(50);

  //TRICK #2 → clear background with semi-transparent
  fill(220, 50);
  rect(0, 0, width, height);

  moveBall(ball);
  moveBall(ball2);
  moveBall(ball3);
  moveBall(ball4);
  moveBall(ball5);
  moveBall(ball6);
  moveBall(ball7);
  moveBall(ball8);
  moveBall(ball9);
  moveBall(ball10);
  moveBall(ball11);
  moveBall(ball12);

  
  
}

function moveBall(b){
  //b → Ball type object
  //update position and draw provided ball

  //generate random position change (x and y)
  let dx = noise(b.timeX); //0-1
  dx = map(dx, 0, 1, -5, 5);
  let dy = noise(b.timeY);
  dy = map(dy, 0, 1, -5, 5);

  //advance our noise graph "cursors"
  b.timeX += b.timeOff;   b.timeY += b.timeOff;

  b.x += dx;     b.y += dy;

  if(b.x < 0) b.x += width;
  else if(b.x > width) b.x -= width;

  if(b.y < 0) b.y += height;
  else if(b.y > height) b.y -= height;   
  
  //render the circle
  fill(b.c);
  circle(b.x, b.y, b.size);
}