
let isDuckMoving = false;
let xPos = innerWidth;
function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(220);
  console.log(isDuckMoving)

  drawDuck(xPos,200);
  if(isDuckMoving == true) {
    xPos -= 5;
  }

  // yellow -> 
}

function mousePressed() {
 
  isDuckMoving = !isDuckMoving;
}


function drawDuck(x,y){
  noStroke();
  //beak
  fill(255, 138, 84);
  rect(x-100,y,50,50,0,0,100,50)
  
  //body
  fill(242, 235, 29);
  ellipse(x,y,150); // x, y, width, height
  rect(x,y,200,150,20,0,100,50) // x, y, width, height
  
  fill(219, 213, 18);
  rect(x+70,y+20,50,50,20,0,100,50)
  
  fill(120,120,30);
  
  //eye
  fill(255);
  ellipse(x-30,y,70);
  
  fill(0)
  ellipse(x-10,y,30);
}