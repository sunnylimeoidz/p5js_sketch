// JavaScript Document
var theta;

function setup() {
  createCanvas(650, 600);
  noStroke();
  background(23, 100, 240);

  var x = 0;
  while(x < width){
    var y = 0;
    while(y < height){
      stroke(4);
      stroke(204, 102, 0);
      fill(345,random(78, 140), random(100,255),random(4,255));
      ellipse(x + 20, y + 20, 38, 38);
      y = y + 20;
    }
    x = x + 20;
  }
}

function draw() {
  background(204, 102, 153);
  frameRate(35);
  stroke(255);
  var a = (mouseX / width) * 90.0;
  theta = radians(a);
  var x = 0;
  while(x < width){
    var y = 0;
    while(y < height){
      stroke(3);
      stroke(255, 0, 255, 2);
      fill(45,random(78, 34), random(100,25),random(4,30));
      ellipse(x + 20, y + 20, 38, 38);
      y = y + 20;
    }
    x = x + 20;
  }
  translate(width/2,height);
  strokeWeight(4);
  stroke(random(200,255),random(100,255),random(40,204));
  line(0,0,0,-200);
  translate(0,-200);
  branch(200);
  //saveFrame("line-######.png");
}


function branch(h) {
  h *= 0.66;
  if (h > 2) {
    push();    
    rotate(theta);   
    stroke(random(200,255),random(100,255),random(40,204));
    line(0, 0, 0, -h);  
    translate(0, -h); 
    branch(h);       
    pop();     
    
    push();
    rotate(-theta);
    stroke(random(200,255),random(100,255),random(40,204));
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h);
    pop();
  }
}