// let rotateBy = 15;
let divisions = 12;
let move1 = 0, move2 = 0, move3 = 0;
let isLayer1animating = false;

let m0,m1,m2,m3,m4;

function preload() {
  m0 = loadImage("./assets/0.png");
  m1 = loadImage("./assets/1.png");
  m2 = loadImage("./assets/2.png");
  m3 = loadImage("./assets/3.png");
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
  
}

function draw() {
  background(255);
  noStroke();
  push();
  
  //moving origin to the center
  translate(width/2, height/2);
  rotate(frameCount/3);
  for(let i =0;i<divisions;i+=1) {
    if(isLayer1animating && move2 <80) {
      move2 += 0.1
    }
    if(isLayer1animating && move1 <280) {
      move1 += .1;

    }

    if(isLayer1animating && move3 <120) {
      move3 += .1;

    }

    //layer 3
    push();
    translate(350-move3,30);
    rotate(-90);
    scale(0.4);
    image(m3,0,0);
    pop();
    //layer 0
    push();
    translate(50+move1,0);
    rotate(-90);
    scale(0.4);
    image(m0,0,0);
    pop();

    //layer 2
    push();
    translate(230,0);
    rotate(-90);
    scale(0.6);
    image(m2,0,0);
    pop();

    //yellow flower - layer 1
    push();
    translate(140+move2,0);
    rotate(-90);
    scale(0.4);
    image(m1,0,0);
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