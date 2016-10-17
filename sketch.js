function setup() {
createCanvas(750, 500);
background(0, 190, 255);

push();
fill(170, 245, 255);
strokeWeight(3);
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
pop();

}


function draw() {
}


function mouseReleased() {
  background(0, 190, 255);
  fish(200, 250, random(100, 200), random(50, 100), random(50, 75), random(25, 50));
}


push();
fill(255);
strokeWeight(3);
function bubbles(xbubble, ybubble, bubbleSize) {
ellipse(random(0, 750), random(0, 500), random(25, 100));
}
pop();


function fish(xbody, ybody, bodyWidth, bodyHeight, finWidth, finHeight) {

push();
fill(255);
strokeWeight(3);
fill(170, 245, 255);
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
bubbles(random(0, 750), random(0, 500), random(25, 100));
noLoop();
pop();

var xbody = 200;
var ybody = 250;
var bodyWidth = random(100, 200);
var bodyHeight = random(50, 75);
var finWidth = random(50, 75)
var finHeight = random(50, 75);

fill(random(63.75, 255), random(63.75, 255), random(63.75, 255));
strokeWeight(3);

//fin
  ellipse(xbody, ybody-bodyHeight/2, finWidth, finHeight, 3.14, 0.00);

//tailfin
triangle(75, ybody-bodyHeight/2, 200, 250, 75, ybody+bodyHeight/2);

//body
push();
fill(random(63.75, 255), random(63.75, 255), random(63.75, 255));
ellipse(xbody, ybody, bodyWidth, bodyHeight);
pop();

//eyeball
push();
fill(255);
ellipse(xbody+bodyWidth/4, ybody-bodyHeight/8, 25);
pop();

//pupil
push();
fill(0);
ellipse(xbody+bodyWidth/4, ybody-bodyHeight/8, 15);
pop();

//shine
push();
fill(255);
ellipse(xbody+bodyWidth/4+5, ybody-bodyHeight/8, 5);
pop();

}
