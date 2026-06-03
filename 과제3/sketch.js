let speed = 0, num = 0;
let pupilX, pupilY, pupilX2, pupilY2;
let d;
let angle1, angle2;
let preX, preY;
let state = 0;
function setup() {
  createCanvas(600, 400);
}
function draw() {
  if (state % 3 === 0) {
    background(135, 206, 235); 
  
    noStroke();
    fill(255, 255, 0, 150);
    ellipse(width * 0.8, height * 0.2, 100, 100); 
    fill(255, 255, 100);
    ellipse(width * 0.8, height * 0.2, 70, 70); 
    fill(255, 230);
    ellipse(150, 100, 60, 40);
    ellipse(130, 110, 50, 35);
    ellipse(170, 110, 50, 35);
  } else if (state % 3 === 1) {
    background(255, 80, 0);
    noStroke();
    fill(255, 69, 0, 180);
    ellipse(width / 2, height * 0.7, 120, 120);
    fill(255, 150, 0);
    circle(width -75, height * 0.6, 120);
    fill(20, 10, 0); 
    rect(0, height * 0.8, width, height * 0.2);
    ellipse(width * 0.3, height * 0.8, 400, 150);
    ellipse(width * 0.8, height * 0.85, 500, 200);

  } else if (state % 3 === 2) {
    background(10, 10, 35); 
    fill(240, 240, 200);
    ellipse(width * 0.2, height * 0.2, 80, 80);
    fill(10, 10, 35); 
    noStroke();
    fill(255, 255, 255, random(150, 255));
    for (let i = 0; i < 100;i++) {
        ellipse(random(0, width), random(0, height), random(0.5, 1.5));
    }
  }  
  noStroke();
  fill(244);
  rect(275, 250, 106, 250);
  fill(252, 218, 207);
  rect(275, 202, 106, 100);
  circle(317, 267, 90);  
  fill(204, 204, 204);
  stroke(50);
  strokeWeight(1);
  arc(274, 400, 320 , 300, PI, PI + HALF_PI);
  arc(381, 400, 290 , 300, PI + HALF_PI, PI);
  noStroke();
  quad(274, 281, 307, 343, 307, 400, 274, 400);
  quad(381, 249, 307, 343, 307, 400, 381, 400);
  stroke(50);
  strokeWeight(1);
  line(274, 281, 307, 343);
  line(381, 249, 307, 343);
  line(307, 343, 307, 400);
  beginShape();
  vertex(278, 314);
  vertex(266, 314);
  vertex(268, 440);
  endShape(CLOSE);
  beginShape();
  vertex(346, 314);
  vertex(358, 314);
  bezierVertex(358, 410, 346, 410, 346, 440);
  vertex(358, 440);
  bezierVertex(346, 410, 358, 410, 358, 440);
  endShape(CLOSE);
  fill(0);
  ellipse(272, 122, 145, 140);
  ellipse(320, 118, 150, 140);
  fill(252, 218, 207);
  stroke(100);
  ellipse(300, 170, 190, 230);
  stroke(100);
  strokeWeight(2);
  fill(252, 218, 207);
  arc(393, 163, 40, 40, PI + QUARTER_PI , HALF_PI);
  noStroke();
  fill(1);
  beginShape();
    vertex(293, 93);
    bezierVertex(274, 97, 285, 150, 264, 156);
    vertex(259, 139);
    bezierVertex(248, 160, 229, 137, 207, 150);
    vertex(210, 100);
    vertex(243, 58);
    vertex(291, 54); 
    vertex(332, 53);
    vertex(380, 84);
    vertex(392, 139);
    vertex(378, 148);
    vertex(363, 130);
    vertex(348, 149);
    bezierVertex(335, 120, 320, 101, 293, 93);
  endShape(CLOSE);
  stroke(1);  
  strokeWeight(3);
  bezier(303, 150, 320, 140, 340, 140, 349, 144);
  bezier(264, 150, 240, 137, 238, 125, 228, 141);
  fill(255);
  strokeWeight(1);
  bezier(314, 159, 320, 150, 337, 151, 343, 154);
  bezier(314, 159, 320, 164, 337, 164, 343, 154);
  bezier(261, 160, 251, 152, 240, 150, 230, 155);
  bezier(261, 160, 250, 165, 237, 165, 230, 155);

  stroke(1);
  strokeWeight(1);
  line(280, 170, 270, 200);
  line(270, 200, 293, 198);
  fill(219, 136, 114);
  ellipse(283, 237, 30, 10);
  
beginShape();
    fill(176, 143, 134);
    vertex(261, 160);
  bezierVertex(250, 165, 237, 165, 230, 155);
  bezierVertex(237, 170 - speed, 250, 170 - speed, 261, 160);
  endShape(CLOSE);

beginShape();
  vertex(314, 159);
  bezierVertex(320, 165, 337, 165, 343, 154);
  bezierVertex(337, 169 - speed, 320, 170 - speed, 314, 159);
  endShape(CLOSE);
    if (keyIsPressed) {
    if (keyCode === LEFT_ARROW) {
    } else if (keyCode === RIGHT_ARROW) {
    } else if (keyCode === DOWN_ARROW) {
        speed -= 0.25;
    } else if (keyCode === UP_ARROW) {
        if(speed <= 5.25){
            speed += 0.25;
        }
    }
  }
  angle1 = atan2(mouseY - 157, mouseX - 326);
  angle2 = atan2(mouseY - 157, mouseX - 246);

  fill(0);
  d = 2.5;
  pupilX = 326 + cos(angle1) * d;
  pupilY = 157 + sin(angle1) * d;
  pupilX2 = 246 + cos(angle2) * d;
  pupilY2 = 157 + sin(angle2) * d;  
  
  circle(pupilX, pupilY, 7);
  circle(pupilX2, pupilY2, 7);

  preX = mouseX;
  preY = mouseY;
    fill(255, 150, 200, 220); // 핑크
    bezier(preX, preY, preX + 10, preY - 13.3, preX + 23.3, preY - 3.3, preX, preY+1.7); // 위쪽
    fill(150, 180, 255, 220); // 블루
    bezier(preX, preY, preX + 16.7, preY + 10, preX + 10, preY + 20, preX, preY + 3.3);  // 아래쪽

    // 왼쪽 날개 (반전)
    fill(255, 150, 200, 220);
    bezier(preX, preY, preX - 10, preY - 13.3, preX - 23.3, preY - 3.3, preX, preY + 1.7);
    fill(150, 180, 255, 220);
    bezier(preX, preY, preX - 16.7, preY + 10, preX - 10, preY + 20, preX, preY + 3.3);

    fill(60);
    ellipse(preX, preY, 3.3, 8.3);  
}

function mousePressed() {
  state++;	
}

function keyPressed(){
    if(key === 's' || key === 'S'){
        saveGif("mySketch.gif", 10);
    }
}