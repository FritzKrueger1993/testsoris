let img;
let x1;
let y1;
let size1;
let x2;
let y2;
let size2;

function preload(){
  img = loadImage('data/img1.png');
}

function setup() {
  createCanvas(windowWidth, windowWidth * 0.3111);
}

function draw() {
  background(0);
  image(img, 0, 0,width,height); 
  fill(38,123,137);
  noStroke();
  if(frameCount % 4 == 0) {
    x1 = random(0,width);
    y1 = random(0,height);
    size1 = random (10, height *0.4);
    x2 = random(0,width);
    y2 = random(0,height);
    size2 = random (10, height *0.4);
  }
  rect(x1,y1,size1,size1*0.5);
  rect(x2,y2,size2,size2*0.5);
}

function windowResized(){
  resizeCanvas(windowWidth, windowWidth * 0.3111);
}
