
let images = [];
let degJump = 5;
let imageChoices = [];

function preload() {
  for(let i =0;i<6;i++) {
    images[i]= loadImage("./assets/"+i+".png");
  }

}
function setup() {
  createCanvas(innerWidth, innerHeight);
  
  frameRate(60);
  angleMode(DEGREES);
  
  for(let i =0;i<100;i++) {
    imageChoices[i] = floor(random(0,6));
  }
}

function draw(){
  background(255);
  push();
  translate(width/2, height/2);
  for(let r = 0,i=0;r< height,i<100 ;r+=20,i++){
    let imageChoice = imageChoices[i];
    // let randomRotate = random(0,90);
    for(let i = 0;i<360;i+=degJump) {
      push();
      translate(r*cos(i+mouseX), r*sin(i+mouseX))
      rotate(i+90);
      scale(0.2)
      image(images[imageChoice],0,0);
      pop();
    }
  }
  
  
  pop();
}