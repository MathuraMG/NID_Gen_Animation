let x; // you may see var x;
let y;
function setup() {
  createCanvas(400,400);
  
  x = 0;
  y=400;
  background(20);
  
}

function draw() {
  fill(x,y,200,100);
  /*
  // L to R
  ellipse(x,200,x/2);
  x = x + 5;

  // R to L
  ellipse(y,200,100);
  y = y - 5;
  */

  //ellipse that follows the mouse
  // ellipse(mouseX,mouseY,(mouseX+mouseY)/5);

  //ellipse at the center of the canvas
  background(0,mouseX,mouseY);
  fill(mouseX, mouseY, 200);
  ellipse(width/2,height/2,50);
  }
