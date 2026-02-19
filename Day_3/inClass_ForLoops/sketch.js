let gSize = 40;
function setup() {
  createCanvas(innerWidth, innerHeight);
  
  frameRate(10);
  angleMode(DEGREES);
}
function draw() {
  background(0);
  for(let x =0 ; x<width ; x+=gSize) { 
    for(let y=0;y<height;y+=gSize) {

      let choice = random(0,1);
      if(choice<0.5) {
        fill(32,125,100);
        line(x,y,x+gSize, y+gSize);
      } else {
        fill(125,32,200);
        line(x+gSize,y,x, y+gSize);
      }
      
      noStroke();
      ellipse(x,y,gSize*sin(frameCount));
      stroke(255);
      fill(255);
      // let randomNumber = floor(random(10,30));
      // text(randomNumber.toString(),x, y );
    }
    
  }
}
