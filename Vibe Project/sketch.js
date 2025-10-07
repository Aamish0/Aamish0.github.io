let particles = [];
let player;
let collectibles = [];
let eventActive = null;
let eventTimer = 0;
let message = '';
let messageTimer = 0;
let collectibleSpawnTimer = 0;

// Ambient effect
let ambientTimer = 0;
let ambientEffect = null;
let ambientDuration = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);

  for (let i = 0; i < 300; i++) {
    particles.push(new Particle());
  }

  player = new Player();
  background(0);

  collectibleSpawnTimer = 300; // first collectible after 5 seconds
  ambientTimer = int(random(300, 600)); // first ambient effect 5–10 sec
}

function draw() {
  noStroke();
  fill(0, 0, 0, 10);
  rect(0, 0, width, height);

  // Display message if active
  if (messageTimer > 0) {
    fill(0, 0, 100);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(message, width / 2, 50);
    messageTimer--;
  }

  // Handle active event
  if (eventActive) {
    eventTimer--;
    if (eventTimer <= 0) endEvent();
  }

  // Spawn collectibles
  if (collectibleSpawnTimer <= 0) {
    spawnCollectible();
    collectibleSpawnTimer = int(random(300, 600));
  } else {
    collectibleSpawnTimer--;
  }

  // Ambient effect timer
  if (ambientTimer <= 0 && !ambientEffect) {
    startAmbientEffect();
    ambientTimer = int(random(300, 600)); // schedule next
  } else if (!ambientEffect) {
    ambientTimer--;
  }

  // Update and show particles
  for (let p of particles) {
    p.update();
    applyEvent(p);
    applyAmbient(p);
    p.show();

    if (player.eat(p)) {
      player.grow(0.5);
      player.absorbColor(p.color);
      p.respawn();
    }
  }

  // Show collectibles
  for (let i = collectibles.length - 1; i >= 0; i--) {
    let c = collectibles[i];
    c.show();

    let d = dist(player.x, player.y, c.x, c.y);
    if (d < (player.size + c.size) / 2) {
      triggerEvent(c.type);
      message = `Collected: ${c.type.toUpperCase()}!`;
      messageTimer = 120;
      collectibles.splice(i, 1);
    }
  }

  // Update ambient effect duration
  if (ambientEffect) {
    ambientDuration--;
    if (ambientDuration <= 0) ambientEffect = null;
  }

  player.update();
  player.show();
}

// -------------------- APPLY EVENT --------------------
function applyEvent(p) {
  if (!eventActive) return;

  if (eventActive === 'vortex') {
    let vortexX = width / 2;
    let vortexY = height / 2;
    let angle = atan2(vortexY - p.y, vortexX - p.x);
    p.x += cos(angle) * 4;
    p.y += sin(angle) * 4;
  }

  if (eventActive === 'explosion') {
    let angle = atan2(p.y - player.y, p.x - player.x);
    p.x += cos(angle) * 5;
    p.y += sin(angle) * 5;
  }

  if (eventActive === 'colorwave') {
    p.color = color((hue(p.color) + 10) % 360, 80, 100, 80);
  }

  if (eventActive === 'sparkle') {
    if (random() < 0.1) {
      p.size *= 2;
      p.color = color(random(360), 100, 100, 100);
    }
  }
}

// -------------------- APPLY AMBIENT EFFECT --------------------
function startAmbientEffect() {
  let effects = ['sparkle', 'rainbow', 'pulse', 'ripple'];
  ambientEffect = random(effects);
  ambientDuration = 60 + int(random(30));
}

function applyAmbient(p) {
  if (!ambientEffect) return;

  if (ambientEffect === 'sparkle') {
    if (random() < 0.05) {
      p.size *= 2;
      p.color = color(random(360), 100, 100, 100);
    }
  }

  if (ambientEffect === 'rainbow') {
    p.color = color((hue(p.color) + 2) % 360, 80, 100, 80);
  }

  if (ambientEffect === 'pulse') {
    p.size *= 1 + 0.1 * sin(frameCount * 0.3);
  }

  if (ambientEffect === 'ripple') {
    let rippleX = width / 2;
    let rippleY = height / 2;
    let d = dist(p.x, p.y, rippleX, rippleY);
    p.x += 0.5 * sin(d * 0.05 + frameCount * 0.2);
    p.y += 0.5 * cos(d * 0.05 + frameCount * 0.2);
  }
}

// -------------------- PARTICLE --------------------
class Particle {
  constructor() { this.respawn(); }

  update() {
    this.angle += random(-0.05, 0.05);
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;

    let d = dist(this.x, this.y, player.x, player.y);
    if (d < 150) {
      let flee = atan2(this.y - player.y, this.x - player.x);
      this.x += cos(flee) * 3;
      this.y += sin(flee) * 3;
    }

    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = width;
    if (this.y > height) this.y = 0;
    if (this.y < 0) this.y = height;
  }

  show() {
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }

  respawn() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(2, 6);
    this.speed = random(1, 2);
    this.angle = random(TWO_PI);
    this.color = color(random(360), 80, 100, 80);
  }
}

// -------------------- PLAYER --------------------
class Player {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 20;
    this.color = color(200, 100, 100);
  }

  update() { this.x = mouseX; this.y = mouseY; }

  show() { fill(this.color); noStroke(); ellipse(this.x, this.y, this.size); }

  eat(p) { return dist(this.x, this.y, p.x, p.y) < (this.size + p.size) / 2; }

  grow(amount) { this.size += amount; }

  absorbColor(newColor) {
    let c1 = this.color.levels, c2 = newColor.levels;
    this.color = color(
      (c1[0]+c2[0])/2, (c1[1]+c2[1])/2, (c1[2]+c2[2])/2, (c1[3]+c2[3])/2
    );
  }
}

// -------------------- COLLECTIBLE --------------------
class Collectible {
  constructor(type) {
    this.type = type; // vortex, explosion, colorwave, sparkle
    this.x = random(100, width-100);
    this.y = random(100, height-100);
    this.size = 20;
    this.color = color(random(360), 100, 100);
  }

  show() {
    fill(this.color);
    stroke(0, 0, 100);
    strokeWeight(2);
    ellipse(this.x, this.y, this.size);
  }
}

// -------------------- EVENTS --------------------
function spawnCollectible() {
  let types = ['vortex', 'explosion', 'colorwave', 'sparkle'];
  collectibles.push(new Collectible(random(types)));
}

function triggerEvent(type) {
  eventActive = type;
  eventTimer = 300; // 5 seconds
}

function endEvent() { eventActive = null; }
