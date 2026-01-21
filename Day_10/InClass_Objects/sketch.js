let carObject;

let levels = [];


function setup() {
  createCanvas(400, 400);
  carObject = {
    width: 40,
    height: 10,
    wheelSize:5
  }


  levels = [
    {name: "intro"}, 
    {name: "level1"}
  ]
}

function draw() {
  background(220);
  rect(200,200, carObject.width, carObject.height);
  ellipse(200, 200+carObject.height,carObject.wheelSize);

  console.log(levels[0].name);
}


