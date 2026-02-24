let count = 0;

let flowerImages = [];
let noFlowerImages = 5;
let flowers=[];
let totalFlowers = 200;
let wreath;

function preload() {
  wreath = loadImage("./assets/wreath.png");
  for (let i = 0; i < noFlowerImages; i++) {
    flowerImages[i] = loadImage("./assets/" + i + ".png");
  }
}

function setup() {
  createCanvas(1200,1200);
  wreath.resize(1200,1200);
  
  // image(wreath,0,0);
  angleMode(DEGREES);
  imageMode(CENTER);  
  // for(let i =0;i<totalFlowers;i++) {
  //   flowers.push(new Flower(random(width), random(height),floor(random(noFlowerImages))));
  // }

}
function draw() {
  background(0);
  for(let k=0;k<10;k++) {
    let tempX = random(width);
    let tempY = random(height);
    if(wreath.get(tempX, tempY)[0]<10){
      flowers.push(new Flower(tempX, tempY,floor(random(noFlowerImages))));
    }
  }
  
  for(let i =0;i<flowers.length;i++) {
    flowers[i].drawFlower();
    flowers[i].growFlower();
    
    for(let j=0;j<flowers.length;j++) {
      if(i!=j) {
        flowers[i].checkCollision(flowers[j]);
      }
    }
  }

  let orgNo = flowers.length;
  flowers = flowers.filter(removeSmallFlowers);
  let newNo = flowers.length;
  

}

function removeSmallFlowers(flower){
  if(flower.size<10&&!flower.isGrowing) {
    return false;
  } 
  return true;
}


