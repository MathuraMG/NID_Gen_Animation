let heads = [];
let torsos = [];
let legs = [];


function preload() {
  for(let i = 0;i<8;i++) {
    let headImageLocation = "./assets/heads/" + i +".png";
    heads[i] = loadImage(headImageLocation);

    let torsoImageLocation = "./assets/torsos/" + i + ".png";
    torsos[i] = loadImage(torsoImageLocation);

    let legImageLocation = "./assets/legs/" + i + ".png";
    legs[i] = loadImage(legImageLocation);
  }
  
}
function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(2);
}

function draw() {
  background(220);
  let randomHead = floor(random(0,8));
  image(heads[randomHead],0,0);
  let randomTorso = floor(random(0,8));
  image(torsos[randomTorso],0,260);
  let randomLeg = floor(random(0,8));
  image(legs[randomLeg],0,520);

}
