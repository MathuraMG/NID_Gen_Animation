let gSize = 200;
let colours = ["#EB4C4C","#FF7070", "#FFA6A6", "#FFEDC7"]


let gridImages = [];

function preload() {
  for(let i = 0;i<4;i++) {
    let imageString = "./assets/Matisse-0" + i + ".png";
    gridImages[i] = loadImage(imageString);
  }
  
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(2);
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
