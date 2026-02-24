class Flower {
  constructor(x,y,index) {
    this.x = x;
    this.y = y;
    this.index = index;
    this.size = .1;
    this.isGrowing = true;
  }

  resetXY(x,y) {
    this.x = x;
    this.y = y;
  }
  drawFlower() {
    image(flowerImages[this.index],this.x, this.y,this.size,this.size);
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
}