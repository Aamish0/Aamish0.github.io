// Cars Cars Cars
// Aamish
// October 20, 2025

///Globals
let westbound = [] 
let eastbound = []
let trafficLight
let car
let seed;

function setup() {
  createCanvas(windowWidth, windowHeight)
  noStroke()
  seed = random(1, 100);

  // create initial cars
  for (let i = 0; i < 20; i++) {
    // westbound
    let w = new Vehicle(random(width), random(height * 0.1 + 20, height / 2 - 20))
    w.dir = 0
    w.xSpeed = -random(2, 6)
    westbound.push(w)

    // eastbound
    let e = new Vehicle(random(width), random(height / 2 + 20, height - height * 0.1 - 20))
    e.dir = 1
    e.xSpeed = random(2, 6)
    eastbound.push(e)
  }

  trafficLight = new TrafficLight(width / 2, 60)
}

function draw() {
  background(220)
  drawRoad()
  
  trafficLight.display()
  trafficLight.update()

  for (let v of westbound) {
    v.action(trafficLight)
  }
  for (let v of eastbound) {
    v.action(trafficLight)
  }
}

// Add cars on click
function mousePressed() {
  if (keyIsDown(SHIFT)) {
    // add westbound car
    let w = new Vehicle(mouseX, random(height * 0.1 + 20, height / 2 - 20))
    w.dir = 0
    w.xSpeed = -random(2, 6)
    westbound.push(w)
  } else {
    // add eastbound car
    let e = new Vehicle(mouseX, random(height / 2 + 20, height - height * 0.1 - 20))
    e.dir = 1
    e.xSpeed = random(2, 6)
    eastbound.push(e)
  }
}

// Toggle traffic light with spacebar
function keyPressed() {
  if (key === ' ') {
    trafficLight.turnRed()
  }
}

function drawRoad() {
  rectMode(CORNERS)
  fill(39, 150, 20)
  rect(0, 0, width, height)

  drawBushes(400)

  fill(50)
  rect(0, height * 0.1, width, height - height * 0.1)

  fill('yellow')
  let yellowLineSpace = 50
  for (let i = 0; i < width; i += yellowLineSpace * 2) {
    rect(i, height / 2 - 5, i + yellowLineSpace, height / 2 + 5)
  }
}

function drawBushes(count) {
  noStroke()
  randomSeed(seed);
  for (let i = 0; i < count; i++) { 
    let x = random(width)
    let y = random(height * 0.1)

    // random size and color variation
    let size = random(20, 50)
    fill(30, random(90, 130), 16)
    circle(x, y, size, size * 0.8)
    circle(x + random(-10, 10), y + random(-10, 10), size * 0.8, size * 0.6)
  }

  for (let i = 0; i < count; i++) { 
    let x = random(width)
    let y = random(height - height * 0.1, height)

    // random size and color variation
    let size = random(20, 50)
    fill(30, random(90, 130), 16)
    circle(x, y, size, size * 0.8)
    circle(x + random(-10, 10), y + random(-10, 10), size * 0.8, size * 0.6)
  }
}

class Vehicle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.type = round(random(0, 1))
    this.c = color(random(255), random(255), random(255))
    this.dir;
    this.xSpeed = 0
  }

  drawCar() {
    rectMode(CENTER)
    fill(0)
    rect(this.x - 16, this.y, 10, 43)
    rect(this.x + 16, this.y, 10, 43)
    fill(this.c)
    rect(this.x, this.y, 50, 35)
  }

  drawTruck() {
    rectMode(CENTER)
    fill(0)
    rect(this.x - 22, this.y, 10, 48)
    rect(this.x + 22, this.y, 10, 48)
    fill(this.c)
    rect(this.x, this.y, 70, 40)
    stroke(5)
    line(this.x - 15, this.y - 20, this.x - 15, this.y + 20)
    noStroke()
  }

  display() {
    if (this.type === 0) {
      this.drawCar()
    } else {
      this.drawTruck()
    }
  }

  move() {
    this.x += this.xSpeed
    if (this.x > width) {
      this.x = 0
    }
    if (this.x < 0) {
      this.x = width
    }
  }

  speedUp() {
    if (this.dir === 1 && this.xSpeed < 6) {
      this.xSpeed += 0.5
    }
    if (this.dir === 0 && this.xSpeed > -6) {
      this.xSpeed -= 0.5
    }
  }

  speedDown() {
    if (this.dir === 1 && this.xSpeed > 0.5) {
      this.xSpeed -= 0.5
    }
    if (this.dir === 0 && this.xSpeed < -0.5) {
      this.xSpeed += 0.5
    }
  }

  changeColor() {
    this.c = color(random(255), random(255), random(255))
  }

  action(light) {
    // only move if green
    if (light.state === 'green') {
      this.move()
      if (random(1) < 0.01) {
        this.speedUp()
      }
      if (random(1) < 0.01) {
        this.speedDown()
      }
      if (random(1) < 0.01) {
        this.changeColor()
      }
    }
    this.display()
  }
}

// Traffic Light Class
class TrafficLight {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.state = 'green'
    this.timer = 0
  }

  display() {
    
    fill(0)
    rect(this.x - 80, this.y - 25, this.x + 80, this.y + 25, 10)

    if (this.state === 'green') {
      
      fill('lime')
      circle(this.x + 40, this.y, 40)
    
      fill(100)
      circle(this.x - 40, this.y, 40)
    } else {
      
      fill('red')
      circle(this.x - 40, this.y, 40)
     
      fill(100)
      circle(this.x + 40, this.y, 40)
    }
  }

  turnRed() {
    if (this.state === 'green') {
      this.state = 'red'
      this.timer = 120
    }
  }

  update() {
    if (this.state === 'red') {
      this.timer--
      if (this.timer <= 0) {
        this.state = 'green'
      }
    }
  }
}


