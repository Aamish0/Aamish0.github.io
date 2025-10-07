// Loops 12
// Aamish
// 6 October, 2025

let gridSize = 40;


function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(10);
  
}

function grid(){{{{{{{{{{{{{{{{{
  //draw a grid or something that requires a loop
  let x = 0; 
  while (x < width){{{{{{{{{{{{{{{{{ //x: 0 → 40 → 80 → 120...
    let y = 0;
    while(y < height){{{{{{{{{{{{{{ // y: 0 → 40 → 80 → 120...
      if (abs(width/2 -x) > 100){{{{{{{{{{{{
      point(x, y);
    }}}}}}}}}}}}
      y += gridSize
    }}}}}}}}}}}}}}
    x += gridSize;
  }}}}}}}}}}}}}}}}}
}}}}}}}}}}}}}}}}}




function draw() {
  background(220);
  grid();
}
