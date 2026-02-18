let ySpeed = 17;
let yPos = 40;
let xPos = 40;
let xSpeed  = 10;

function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  noStroke();
  fill(sin(frameCount)*255, cos(frameCount)*255,120)
  ellipse(xPos,yPos, 50);

  fill(255);
  ellipse(xPos/10,yPos/10, 50);
  fill(0);
  ellipse(xPos/10-10,yPos/10, 20);
  
  yPos = yPos + ySpeed; //yPos += ySpeed;
  xPos = xPos + xSpeed; //xPos += xSpeed

  //when it reaches the bottom, switch direction
  if(yPos > height-25|| yPos <25) {
    ySpeed = -ySpeed;
  }

  if(xPos > width-25|| xPos <25) {
    xSpeed = -xSpeed;
  }
  
}
