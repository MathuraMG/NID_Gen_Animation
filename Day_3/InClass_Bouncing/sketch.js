let ySpeed = 10;
let yPos = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(220);
  ellipse(width/2,yPos, 50);
  yPos = yPos + ySpeed; //yPos += ySpeed;

  //when it reaches the bottom, switch direction
  if(yPos > height) {
    ySpeed = -10;
  } else if (yPos <0) {
    ySpeed = 10;
  }
}
