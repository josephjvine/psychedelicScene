function setup() {
    var canvas = createCanvas(600, 800);
    canvas.parent("p5container");
}


//starMovingFunctionAndShapeDrawnOut
function star(x,y,radius1,radius2,npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;

    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy); 
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }


function draw() {

    background(77,232,255);

//sunEyesVariablesDeclared
var eyeX = map(mouseX,0,width, 245, 285);
var eyeY = map(mouseY,0,275,330,350);
console.log(mouseX,mouseY); //logging position of mouseX and mouseY

//movingStars
    //spinning stars
    push(); //push and pop used so that the translation does not effect later drawn shapes
    translate(490, 480); //decided where star will be
    rotate(frameCount / -200.0); //changes speed of stars moving
    fill(153,51,255,150)
    star(0, 0, 15, 40, 5); //star x and y, shape and size, and number of points
    pop();

    push();
    translate(530, 400);
    rotate(frameCount / -300.0);
    fill(0,0,153,150)
    star(0, 0, 7, 20, 5);
    pop();

    push();
    translate(80, 90);
    rotate(frameCount / -200.0);
    fill(0,128,255,150)
    star(0, 0, 15, 40, 5);
    pop();

    push();
    translate(55, 180);
    rotate(frameCount / -300.0);
    fill(102,0,204,)
    star(0, 0, 10, 25, 5);
    pop();


//landBelowDrawn
    //yellow road
    noStroke()
    fill(250, 212, 61);
    rect(0, 600, 600,300);

    noStroke()
    fill(250, 212, 61);
    ellipse(210, 640, 300,100);

    //yellow road shadow
    noStroke()
    fill(210,178,50)
    triangle(0,750, 0, 800, 600,800)

    //yellow road stones
    noStroke()
    fill(201, 166, 26);
    ellipse(230, 600, 11,3);

    noStroke()
    fill(208, 178, 58);
    ellipse(160, 725, 5,2);
    
    noStroke()
    fill(226, 189, 35);
    ellipse(200, 620, 10,5);

    noStroke()
    fill(201, 166, 26);
    ellipse(220, 640, 7,3);

    noStroke()
    fill(226, 189, 35);
    ellipse(196, 667, 10,4);
    
    noStroke()
    fill(201, 166, 26);
    ellipse(182, 690, 7,3);

    noStroke()
    fill(226, 189, 35);
    ellipse(180, 720, 10,5);

    noStroke()
    fill(208, 178, 58);
    ellipse(160, 725, 5,2);

    //grass hills
    noStroke()
    fill(22, 182, 38);
    ellipse(450, 780, 520,450);

    noStroke()
    fill(21, 215, 40);
    ellipse(470, 780, 500,450);

    noStroke()
    fill(22, 182, 38);
    ellipse(-20, 650, 390,250);

    noStroke()
    fill(21, 215, 40);
    ellipse(-20, 655, 340,245);

//movingCloudsDrawn

    //clouds
    

//trippySunDrawn

    //sun
    strokeWeight(0); //thickness
    stroke(216,205,44); //stroke fill 
    fill(238, 225, 53);
    ellipse(width/2, 275, width/2);

    fill(216,205,44);
    ellipse(width/2, 275, width/2);

    fill(238, 225, 53);
    ellipse(290, 290, 275,275);

    //mouth
    strokeWeight(4); //thickness
    stroke(0,0,0); //stroke fill 
    fill(0);
    arc(width/2, 327.5, 160, 100, 0, PI, CHORD); //position, size, start and stop angles

    noStroke();
    fill(238,225,53);
    ellipse(width/2,320,150,32)

    //smile corner line left
    strokeWeight(4); //thickness
    stroke(0,0,0); //stroke fill  
    noFill();
    arc(214,318,20,20,radians(0), radians(135)); //position, size, start and stop angles

    //smile corner line right
    strokeWeight(4); //thickness
    stroke(0,0,0); //stroke fill  
    noFill();
    arc(385,318,20,20,radians(60), radians(180)); //position, size, start and stop angles

    //tounge
    noStroke()
    fill(249,19,50)
    arc(275, 367, 80, 90, 0, PI + QUARTER_PI, PIE); //position, size, start and stop angles

    //acidTab
    push(); //used push and pop so that rotation translation does not affect later drawn shapes
    translate(width/2, height/2);
    rotate(PI / 3.0);
    fill(255,255,255)
    rect(-30, +10, 15, 15);
    pop();

    //cheeks
    noStroke()
    fill(255,245,92);
    ellipse(375, 295, 35,25);
      
    fill(255,245,92);
    ellipse(225, 295, 35,25);

    //eyes
    strokeWeight(4); //thickness
    stroke(0,0,0); //stroke fill

    fill(4,4,4);
    ellipse(eyeX,eyeY-115,35,80);
    
    fill(4,4,4);
    ellipse(eyeX+100,eyeY-115,35,80);

    noStroke()
    fill(255,255,255);
    ellipse(eyeX+3,eyeY-128,15);
    
    noStroke()
    fill(255,255,255);
    ellipse(eyeX+103,eyeY-128,15);
  
    noStroke()
    fill(255,255,255);
    ellipse(eyeX-5,eyeY-100,10);
    
    noStroke()
    fill(255,255,255);
    ellipse(eyeX+95,eyeY-100,10);

//bushesDrawn

    //bushes 1

    //bushes drawn 1
    if(mouseX < width/2){ //if mouse x is further than middle of the screen bushes will change in shape
    fill(9,128,20);
    rect(50,590,40,40);
    } else {
    fill(9,128,20);
    ellipse(70,610,40)
    }

    if(mouseX < width/2){
    fill(23,91,30);
    rect(80,620,25,25);
    } else {
    fill(23,91,30);
    ellipse(90,620,25)
    }

    //bushes drawn 2
    if(mouseX < width/2){
    fill(23,91,30);
    rect(20,680,30,30);
    } else {
    fill(23,91,30);
    ellipse(35,695,30)
    }

    //bushes drawn 3
    if(mouseX < width/2){
    fill(76,250,94);
    rect(-25,560,50,50);
    } else {
    fill(76,250,94);
    ellipse(0,582,50)
    }

    //bushes drawn 4
    if(mouseX < width/2){
    fill(76,250,94);
    rect(110,675,15,15);
    } else {
    fill(76,250,94);
    ellipse(117,682,15)
    }

//bushesDrawn2

    //bushes 2

    //bushes drawn 5
    if(mouseX < width/2){
    fill(9,128,20);
    rect(505,590,50,50);
    } else {
    fill(9,128,20);
    ellipse(530,615,50)
    }

    if(mouseX < width/2){
    fill(76,250,94);
    rect(535,615,30,30);
    } else {
    fill(76,250,94);
    ellipse(550,630,30)
    }

    //bushes drawn 6
    if(mouseX < width/2){
    fill(23,91,30);
    rect(350,640,80,80);
    } else {
    fill(23,91,30);
    ellipse(390,680,80)
    }

    if(mouseX < width/2){
    fill(76,250,94);
    rect(320,680,50,50);
    } else {
    fill(76,250,94);
    ellipse(360,710,50)
    }

    //bushes drawn 6
    if(mouseX < width/2){
    fill(23,91,30);
    rect(500,700,40,40);
    } else {
    fill(23,91,30);
    ellipse(520,720,40)
    }

    //bushes drawn 6
    if(mouseX < width/2){
    fill(23,91,30);
    rect(500,700,40,40);
    } else {
    fill(23,91,30);
    ellipse(520,720,40)
    }

    //sun circles
    translate(width/2,275); //making the sun the center of this drawing
	for (var i = 0; i < 8; i++) {
	push();
	rotate(TWO_PI * i / 8);
    fill(238,225,53)
	ellipse(200,0,40); //pixels away from sun
	pop();
	}


}

