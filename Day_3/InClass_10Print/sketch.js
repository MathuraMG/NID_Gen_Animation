let gSize = 20;
let xPos = 0, yPos = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  
  // make a random choice
  noStroke();
  fill(xPos, yPos,10);
  rect(xPos, yPos, gSize);


  let choice = random(0,1);
  strokeWeight(mouseX/10);
  stroke(10,xPos, yPos);
  if(choice>0.5) {
    line(xPos, yPos, xPos+gSize, yPos+gSize);
  } else {
    line(xPos+gSize, yPos, xPos, yPos+gSize);
  }
  //moving the grid position, so that we can draw the next line  
  xPos += gSize; // xPos = xPos + gSize;
  if(xPos > width) {
    yPos += gSize;
    xPos = 0;
  }
  
}
