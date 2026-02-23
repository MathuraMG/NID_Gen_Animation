class Flower {
  constructor(x,y,index) {
    this.x = x;
    this.y = y;
    this.index = index;
    this.curve = random(-20,20);
    this.floorX = x;
  }
  drawFlower() {
    noFill();
    beginShape();

    // Add the first anchor point.
    vertex(this.x, this.y);

    // Add the Bézier vertex.
    bezierVertex(this.x, this.y+10, this.x-this.curve, this.y + (height -this.y)/2, this.floorX, height);

    // Stop drawing the shape.
    endShape();
    image(flowerImages[this.index],this.x, this.y);
  }

  swayFlower(sway, xPos) {
    if(abs(mouseX - this.x) <50) {
      this.x += sway;
    }
    
  }
}