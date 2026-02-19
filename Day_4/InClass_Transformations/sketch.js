// let rotateBy = 15;
let divisions = 10;

function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
  background(20);
}
/*
// UNCOMMENT DRAW FOR THE ELLIPSE MOVEMENT
function draw() {
  background(20);
  noStroke();
  push();
  
  //moving origin to the center
  translate(width/2, height/2);
  rotate(-frameCount);
  for(let i =0;i<divisions;i+=1) {
    ellipse(200,0,50*sin(frameCount));
    ellipse(400,0,50*sin(frameCount));
    rotate(360/divisions);
  }

  rotate(3*frameCount);
  for(let i =0;i<divisions;i+=1) {
    ellipse(300,0,50*cos(frameCount));
    rotate(360/divisions);
  }
  
  pop();

}
*/    
function mousePressed() {
  divisions += 1;
}

function mouseDragged() {
  stroke(255);
  strokeWeight(10);
  push();
  translate(width/2,height/2);
  for(let i =0;i<divisions;i+=1) {
    line(mouseX-width/2, mouseY-height/2, pmouseX-width/2, pmouseY-height/2)
    rotate(360/divisions);
  }

  pop();
}
