let flowers = [];
let flowerImages = [];
let noFlowerImages = 5;
let sway = 0;

function preload() {
  for(let i =0;i<noFlowerImages;i++) {
    flowerImages[i]=loadImage("./assets/"+i+".png");
  }
}

function setup() {
  createCanvas(innerWidth, innerHeight);
  console.log(flowerImages);
  imageMode(CENTER);
}

function draw() {
  background(255);
  for(let i =0;i<flowers.length;i+=1) {
    flowers[i].drawFlower();
    
  }
}

function mouseClicked() {
  let newFlower = new Flower(mouseX, mouseY, floor(random(noFlowerImages)));
  flowers.push(newFlower);
}

function mouseDragged() {
  sway = map(mouseX, 0, width, -2,2);
  for(let i =0;i<flowers.length;i+=1) {
    flowers[i].swayFlower(sway,mouseX);
  }
  
}

