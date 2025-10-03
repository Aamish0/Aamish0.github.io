// Nested Loops and Popping Bubbles
// Aamish
// October 3, 2025

//Globals
let bubbles = [];
let bubbleSize = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  populateArray();
  
}

function draw() {
  background(50);
  showBubbles();
}

function populateArray(){
  //use a nested loop to generate x,y positions for all of our bubbles.
  for(x = bubbleSize; x < width - bubbleSize; x += bubbleSize){
    for(let y = bubbleSize; y < height - bubbleSize; y += bubbleSize){
      let b = {
        x: x,     y: y
      };
      bubbles.push(b);
    }
  }
}

function showBubbles(){
  //traverse the array, and display a bubble at each (x,y)
  for(let i = 0; i < bubbles.length; i++){
    let b = bubbles[i];
    circle(b.x, b.y, bubbleSize);
    
    //point-in-circle distance check(pop):
    if(dist(b.x, b.y, mouseX, mouseY) < bubbleSize/2){
      // to delete an item: use .splice()
      // .splice(pos, #ofItemsToDel, [replacement item])
      bubbles.splice(i, 1);
    }
  }
}













function drawWithGrid(){
  fill(130);
  for (let x = 30; x <= width - 30; x += 30){
    //x: 0, 30, 60
    for(let y = 30; y <= height - 30; y += 30){
      //y: 0, 30, 60
      circle(x,y,30);
    }
  }
}
