
let xPos = 0;
function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(60);
}

function draw() {
  ellipse(xPos,200,50);
  xPos = xPos +10;
}

function drawBoat(x,y) {
  
  rect(x,y, 120,50,0,0,35,35); // x was 180, y was 200
  
  triangle(x+20, y-10, x+70, y-10, x+70, y-50);
}

function mousePressed() {
  drawBoat(mouseX, mouseY);
}

function mouseDragged() {
  drawBoat(mouseX, mouseY);
}


// function mouseReleased() {
//   fill("yellow");
//   ellipse(mouseX, mouseY, 50);
// }
