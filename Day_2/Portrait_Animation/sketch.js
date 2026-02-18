let x = 150;
let y = 200;
function setup() {
  createCanvas(500,500);
  
  //to "paint" use *fill*
  fill(242, 235, 29);
  angleMode(DEGREES);
}

function draw() {
  background(126, 223, 242);
  
  noStroke();

  //beak
  fill(255, 138, 84);
  rect(x-100,y,50,50,0,0,100,50)
  
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
  ellipse(100+mouseX/20,y,30);
}