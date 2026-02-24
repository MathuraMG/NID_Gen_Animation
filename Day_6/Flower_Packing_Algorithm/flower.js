class Flower {
  constructor(x,y,index) {
    this.x = x;
    this.y = y;
    this.index = index;
    this.size = .1;
    this.isGrowing = true;
    this.count = 0;
    this.randomSeed = random(0,100000);
  }

  resetXY(x,y) {
    this.x = x;
    this.y = y;
  }
  drawFlower() {
    push();
    translate(this.x, this.y);
    rotate(360*noise(count*0.0001 + this.randomSeed))
    image(flowerImages[this.index],0,0,this.size,this.size);
    count++;
    pop();
  }

  growFlower() {
   if(this.isGrowing){
    this.size+=2;
   }
  }

  checkCollision(otherFlower) {
    if(dist(this.x, this.y, otherFlower.x, otherFlower.y)<this.size/2+otherFlower.size/2){
      this.isGrowing = false;
    }
  }

  jitter() {
    
  }
}