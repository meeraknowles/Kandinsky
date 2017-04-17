var bubbles = [];
var m = 10;
var k = 200;
var diameter = 100;
var l = 20
var p = 300
var a = 300
var b = 100
var osc;
var playing = false;
var value = 0;

function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 2; i++) {
    bubbles[i] = {
      x: random(0, width),
      y: random(0, height),
      display: function() {
        stroke(random(205), 0, random(205));
        fill(random(205), 0, random(205));
        ellipse(this.x, this.y, 100, 100);
      },
      move: function() {
        this.x = this.x + random(1, -1);
        this.y = this.y + random(1, -1);
      }
    }
  }
}
function draw() {
    background('#efe0b8');
  
    
 fill ('blue'); 
quad(40, 0, 50, 0, 400, 600, 200, 600 )

fill('yellow');
quad(550, 0, 600, 0, 130, 600, 5, 600 )

fill('#f2dce2');
stroke('black');
strokeWeight(10);
ellipse(250, 250, 485, 485)

fill('yellow');
stroke('black');
strokeWeight(4);
ellipse(110, 310, 150, 150)

fill('purple');
stroke('black');
strokeWeight(4);
ellipse(300, 90, 80, 80)

fill('purple');
stroke('black');
strokeWeight(4);
ellipse(mouseX, mouseY, 20, 20);

//moving circle change last 2 cords to mox and moy
fill('blue');
stroke('black');
strokeWeight(4);
ellipse(220, 220, 80, 80)


fill('red');
stroke('black');
strokeWeight(9);
ellipse(120, 220, 30, 30)
      
fill('#f4d9e1');
stroke('black');
strokeWeight(4);
ellipse(210, 210, 40, 40)

fill('yellow');
stroke('black');
strokeWeight(4);
ellipse(310, 310, 100, 100)

fill('yellow');
stroke('black');
strokeWeight(4);
ellipse(310, 310, 100, 100)

fill('red');
stroke('black');
strokeWeight(4);
ellipse(100, 100, 20, 20)


 fill('#2c3d23')
 ellipse(a, b, 200, 200);
  
 b = b + 0.001;
 
 fill('#2c3d23')
 ellipse(l, p, 200, 200);
  
 l = l + 0.2;
 
fill('red');
ellipse(m, k, 150, 150);
  
  
 m = m + 0.3;
 
 fill('blue');
ellipse(b, a, diameter, diameter);
  
 b = b + 0.001;

line(b, b, 85, 75);
b = b + 1

line(300, 300, 115, 440);

line(400, 400, 215, 50);

line(a, a, 415, 550);
a = a + 0.1


    
      
line(mouseY, mouseX, 415, 550);

fill('black');
stroke('black');
strokeWeight(1);
ellipse(350, 300, 10, 10)


fill('black');
stroke('black');
strokeWeight(1);
ellipse(230, 100, 20, 20)

fill('black');
stroke('black');
strokeWeight(1);
ellipse(440, 150, 20, 20)

fill('#f4d9e1');
stroke('black');
strokeWeight(1);
ellipse(400, 400, 50, 50)

fill('black');
stroke('black');
strokeWeight(1);
ellipse(350, 300, mouseX, mouseY)

line(200, 140, 150, 500);

fill('black');
stroke('black');
strokeWeight(1);
ellipse(160, 400, 5, 5)


fill('black');
stroke('black');
strokeWeight(1);
ellipse(400, 400, 50, 50)


fill('orange');
stroke('black');
strokeWeight(4);
ellipse(mouseX, mouseY, 100, 100);

fill('red');
stroke('black');
strokeWeight(1);
ellipse(mouseY, mouseX, 10, 10)

fill(random(205), 0, 0);
stroke('black');
strokeWeight(1);
ellipse(mouseX, mouseY, 20, 20)

if (mouseIsPressed)
    ellipse(400, 300, 50, 50);
  else
   ellipse(400, 400, 50, 50);
   
if (mouseIsPressed)
   line(100, 100, 415, 550);
   
   if (mouseIsPressed)
   line(200, 100, 415, 550);

   if (mouseIsPressed)
   line(100, 20, 100 , 20);
   
     fill(value);
  ellipse(190, 100, 50, 50);
  
  fill(value);
  ellipse(100, 350, 50, 50);
   
     fill(value);
  ellipse(200, 350, 10, 10);
  
    fill(value);
  ellipse(300, 390, 10, 10);
  
  
  strokeWeight(2);
  fill(128 + sin(frameCount*0.1) * 128);
  if (mouseIsPressed) {
    stroke('#dbedff');
  }

 ellipse(100, 400, 100, 100)
 
  ellipse(300, 200, 100, 100)
  
    ellipse(300, 400, 50, 50)
  

 for (var i = 0; i < bubbles.length; i++) {
      bubbles[i].move();
      bubbles[i].display();
}

function keyPressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
  
}
}




