let c1, c2, c3;
let x1, x2, x3, y1, y2, y3, cx, cy;
let step1 = 0, step2 =0.5;
let angle = 0;
let shakeX;
let shakeY;
let planetX = 500;
let planetY = 295;
let speedX = 1.5;  // 가로 움직임 속도
let speedY = -1.5; // 세로 움직임 속도  
function setup(){
  createCanvas(600, 400);
  background(240);
}

function draw(){
  //뒷배경
  noStroke();
  background(204, 255, 255);
  fill(204, 240, 153);
  quad(160, 0, 0, 100, 200, 400, 600, 200);
  fill(255, 255, 204);
  triangle(330, 320, 50, 110, 525, -30);
  fill(203, 154, 102);
  quad(390, 20, 340, 180, 400, 200, 575, 100);
  fill(240);
  triangle(365, 100, 472, 160, 500, 68);
  
  // 음양
  push();
  translate(125, 270);
  rotate(frameCount*0.01);
  stroke(1);
  strokeWeight(0);
  fill(0,0,153);
  circle(500, 295, 50);
  fill(0);
  arc(0, 0, 200, 200, HALF_PI, HALF_PI+PI);
  fill(255);
  arc(0, 0, 200, 200, HALF_PI+PI, HALF_PI);
  arc(0, 50, 100, 100, HALF_PI, HALF_PI+PI);
  fill(0);
  arc(0, -50, 100, 100, HALF_PI+PI, HALF_PI);
  pop();
  
  //칼집
  stroke(5);  
  strokeWeight(4);
  line(400 + random(-3, 3), 110 + random(-3, 3), 472 + random(-3, 3), 120 + random(-3, 3));
  line(400 + random(-3, 3), 100 + random(-3, 3), 472 + random(-3, 3), 105 + random(-3, 3));
  line(440 + random(-3, 3),  85 + random(-3, 3), 450 + random(-3, 3), 140 + random(-3, 3));
  line(455 + random(-3, 3),  85 + random(-3, 3), 460 + random(-3, 3), 140 + random(-3, 3));
  line(480 + random(-3, 3),  85 + random(-3, 3), 430 + random(-3, 3), 130 + random(-3, 3));
  line(450 + random(-3, 3),  85 + random(-3, 3), 420 + random(-3, 3), 125 + random(-3, 3));
  
  //큐브
  noStroke();
  if (frameCount % 60 === 1 || frameCount === 1) {
    c1 = color(random(255), random(255), random(255));
    c2 = color(random(255), random(255), random(255));
    c3 = color(random(255), random(255), random(255));
  }
  fill(c1);
  quad(260, 30, 310, 55, 260, 80, 210, 55);
  fill(c2);
  quad(210, 55, 260, 80, 260, 130, 210, 105);
  fill(c3);
  quad(260, 80, 310, 55, 310, 105, 260, 130);
  
  // 바코드
  stroke(1);
  strokeWeight(20);
  noFill();
  arc(260, 200, 500, 100, 0, HALF_PI);
  fill(255, 255, 204);
  noStroke();
  quad(330, 320, 230, 245, 300, 200, 320, 300);
  fill(204, 240, 153);
  quad(450, 180, 600, 200, 490, 240, 480, 200);
  
  //바코드 선
  stroke(255, 255, 204);
  strokeWeight(10);
  line(340, 200, 345, 260);
  stroke(204, 240, 153);
  strokeWeight(3);
  line(400, 220, 410, 270);
  line(410, 220, 420, 270);
  line(420, 220, 430, 270);
  line(430, 220, 440, 270);
  line(440, 220, 450, 270);
  line(450, 220, 460, 270);
  line(460, 220, 470, 270);
  
  // 삼각형
  x1 = 240;
  y1 = 290;
  x2 = 300;
  y2 = 360;
  x3 = 200;
  y3 = 360;
  cx = (x1 + x2 + x3) / 3;
  cy = (y1 + y2 + y3) / 3;

  // 1. 바깥 삼각형
  strokeWeight(7); stroke(0); fill(255, 228, 181);
  triangle(x1, y1, x2, y2, x3, y3);

  // 2. 커지는 안쪽 삼각형 (중심에서 꼭짓점 방향으로 이동량 계산)
  // 2. 첫 번째 커지는 안쪽 삼각형
  strokeWeight(5); fill(255, 228, 181);
  triangle(
    cx + (x1 - cx) * step1, cy + (y1 - cy) * step1,
    cx + (x2 - cx) * step1, cy + (y2 - cy) * step1,
    cx + (x3 - cx) * step1, cy + (y3 - cy) * step1
  );

  // 3. 두 번째 커지는 안쪽 삼각형
  // (색상이 겹치면 구분이 안 되므로 투명도를 주거나 색상을 살짝 다르게 하면 더 예쁩니다)
  strokeWeight(5); fill(255, 228, 181); 
  triangle(
    cx + (x1 - cx) * step2, cy + (y1 - cy) * step2,
    cx + (x2 - cx) * step2, cy + (y2 - cy) * step2,
    cx + (x3 - cx) * step2, cy + (y3 - cy) * step2
  );

  // 3. 0에서 1까지 커지다가 바깥 삼각형과 만나면(1이 되면) 리셋
  step1 += 0.025;
  if (step1 >= 1.0) step1 = 0;

  step2 += 0.025;
  if (step2 >= 1.0) step2 = 0;
  
// --- 행성 무작위 움직임 구간 시작 ---
  
  // 1. 위치에 속도를 더해 행성을 이동시킵니다.
  planetX += speedX;
  planetY += speedY;

  // 2. 가끔씩 무작위로 방향을 부드럽게 틀어줍니다. (약 3%의 확률로 속도에 변화를 줌)
  if (random(1) < 0.03) {
    speedX += random(-0.5, 0.5);
    speedY += random(-0.5, 0.5);
  }

  // 3. 화면 벽에 부딪히면 밖으로 나가지 않고 반대로 튕기게 만듭니다.
  // (행성 크기 반지름인 약 26픽셀 정도의 여백을 두었습니다)
  if (planetX < 26 || planetX > width - 26) {
    speedX *= -1;
    planetX = constrain(planetX, 26, width - 26);
  }
  if (planetY < 26 || planetY > height - 26) {
    speedY *= -1;
    planetY = constrain(planetY, 26, height - 26);
  }

  // 4. 기존 코드의 미세한 덜덜 떨리는(shake) 효과 적용
  shakeX = planetX + random(-1, 1);
  shakeY = planetY + random(-1, 1);

  push(); 
  translate(shakeX, shakeY); // 실시간으로 변하는 무작위 위치로 중심축 이동
  rotate(angle);             // 행성 자체 회전

  // [행성 본체]
  noStroke();
  fill(0, 0, 153);
  circle(0, 0, 52); 

  // [행성 위의 점들] - 원점(0,0) 기준 상대 좌표
  strokeWeight(3);
  stroke(255, 255, 0); // 노란색 점
  point(-12, 2); 
  point(-2, 11); 
  point(10, -15);

  stroke(252, 102, 52); // 주황색 점
  strokeWeight(8);
  point(4, 0); 

  stroke(0, 51, 255); // 파란색 점
  strokeWeight(5);
  point(-1, -15); 
  noStroke();

  // [태양 주위 아치/고리]
  noFill();
  stroke(255, 102, 0);
  strokeWeight(3);
  arc(0, 0, 90, 35, radians(324), radians(216));
  arc(0, 0, 35, 90, radians(54), radians(307));

  pop(); 
  // --- 행성 무작위 움직임 구간 끝 ---

  angle += 0.01; // 회전 각도 업데이트
}

function keyPressed() {

if (key === 's') {

saveGif('mySketch', 5);

}}