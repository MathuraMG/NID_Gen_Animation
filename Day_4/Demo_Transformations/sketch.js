// let rotateBy = 15;
let divisions = 12;
let move1 = 0, move2 = 0;
let isLayer1animating = false;

let dollImage;

function preload() {
  dollImage = loadImage("doll.png");
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
  
}

function draw() {
  background(20);
  noStroke();
  push();
  
  //moving origin to the center
  translate(width/2, height/2);
  rotate(frameCount/3);
  for(let i =0;i<divisions;i+=1) {
    if(isLayer1animating && move2 <100) {
      move2 += 0.1
    }
    if(isLayer1animating && move1 <180) {
      move1 += .1;

    }
    push();
    translate(50+move1,0);
    rotate(-90);
    scale(0.2);
    image(dollImage,0,0);
    pop();

    
    push();
    translate(120+move2,0);
    rotate(-90);
    scale(0.4);
    image(dollImage,0,0);
    pop();

    push();
    translate(230,0);
    rotate(-90);
    scale(0.6);
    image(dollImage,0,0);
    pop();

 
    rotate(360/divisions);
  }
  pop();

}

// function mousePressed() {
//   divisions += 1;
// }


function keyPressed() {
  
  if(keyCode == UP_ARROW) {
    isLayer1animating = true;
  }
}