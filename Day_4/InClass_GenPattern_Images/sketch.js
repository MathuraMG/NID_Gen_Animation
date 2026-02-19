let gSize = 50;
let colours = ["#EB4C4C","#FF7070", "#FFA6A6", "#FFEDC7"]


let gridImages = [];

function preload() {
  gridImages[0] = loadImage("./assets/gArt-00.png");
  gridImages[1] = loadImage("./assets/gArt-01.png");
  gridImages[2] = loadImage("./assets/gArt-02.png");
  gridImages[3] = loadImage("./assets/gArt-03.png");
  
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(10);
}

function draw() {
  background(220);
  
  for(let i = 0;i<width;i+=gSize) {
    for(let j = 0;j<height;j+=gSize) {
      let choice = floor(random(0,gridImages.length));
      image(gridImages[choice], i, j,gSize, gSize);
    }
  }
}
