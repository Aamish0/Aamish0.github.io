// Map data structure and reading giles
// Aamish
// October 31, 2025

//Globals
let textFile;
let imgText, rows, cols, colorMap;

function preload(){
  //use this function to load text from our files
  textFile = loadStrings("assets/info.txt");
  imgText = loadStrings("assets/colorImage.txt");
}


function setup() {
  createCanvas(windowWidth, windowHeight); 
  // background(50);
  // processText();
  noStroke();
  
  

  //lets determine the number of rows and columns
  rows = imgText.length;
  cols = imgText[0].length;

  //construct the map of colors
  colorMap = new Map([
    ["b", "black"],
    ["w", color(255)], //white
    ["p", "purple"],
    ["r", "red"],
    ["l", "lime"],
    
  ]);
}


function drawImage(){
  // read through our text info and construct and image
  let pixelSize = 50
  for(let y = 0; y < rows ; y++){
    let currentRow = imgText[y];
    for(let x = 0; x < cols; x++){
      let currentKey = currentRow[x];
      fill(colorMap.get(currentKey));
      rect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
    }
  }
}

function draw() {
  // background(50);
  drawImage();
}










function processText(){
  // look at 3 different ways to split up a larger string into words or individual characters

  //split() and ...spread syntax
  print("SPLIT INTO WORDS");
  let splitWords = textFile[0].split(" ");
  print(splitWords);

  let splitChars = textFile[1].split("");
  print(splitChars);

  print("SPREAD INTO CHARACTERS")
  let spreadChars = [...textFile[2]];
  print(spreadChars);
}