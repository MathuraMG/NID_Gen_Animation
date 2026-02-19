let blocks = [];
let gS = 50;
function preload() {
  for(let i =0;i<4;i++) {
    blocks[i] = loadImage("assets/block-0"+i+".png");
  }
  
}

function setup() {
  createCanvas(400, 400);
  frameRate(5);
  
}

function draw() {
  background(255);
  for(let x =0;x<400;x+=gS) {
    for(let y = 0;y<400;y+=gS) {
      let imageChoice = floor(random(0,4));
      image(blocks[imageChoice],x,y,gS,gS);
    }
  }
}
