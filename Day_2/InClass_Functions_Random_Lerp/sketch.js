let ellipseD;
let colour1, colour2;

function setup() {
  createCanvas(400, 400);
  ellipseD = 50;
  colour1 = "#28e0af";
  colour2 = "#ed6fb7";
}

function draw() {
  background(220);

  
  fill(lerpColor(color(colour1), color(colour2), 0+frameCount*0.01));
  ellipse(50,200,50);

   fill(lerpColor(color(colour1), color(colour2), 0.2+frameCount*0.01));
  ellipse(100,200,50);

  fill(lerpColor(color(colour1), color(colour2), 0.4+frameCount*0.01));
  ellipse(150,200,50);

  fill(lerpColor(color(colour1), color(colour2), 0.6+frameCount*0.01));
  ellipse(200,200,50);

  fill(lerpColor(color(colour1), color(colour2), 0.8+frameCount*0.01));
  ellipse(250,200,50);

  fill(lerpColor(color(colour1), color(colour2), 1+frameCount*0.01));
  ellipse(300,200,50);
 
}
