
let images = [];

function preload() {
  for(let i =0;i<6;i++) {
    images[i]= loadImage("./assets/"+i+".png");
  }

}
function setup() {
  createCanvas(innerWidth, innerHeight);
  
  frameRate(1);
}

function draw(){
  background(255);
  for(let i =0;i<width;i+=200) {
    for(let j =0;j<height;j+=200) {
      image(images[floor(random(0,6))],i,j);
    }
  }
}