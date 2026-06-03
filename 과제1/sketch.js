let c1, c2, c3;
let x1, x2, x3, y1, y2, y3, cx, cy;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // 1. 뒷배경 및 기본 도형들
  noStroke();
  background(204, 255, 255); // 연하늘색 바탕
  
  fill(204, 240, 153);
  quad(160, 0, 0, 100, 200, 400, 600, 200); // 연두색 사각형
  
  fill(255, 255, 204);
  triangle(330, 320, 50, 110, 525, -30); // 연노란색 삼각형
  
  fill(203, 154, 102);
  quad(390, 20, 340, 180, 400, 200, 575, 100); // 갈색 사각형
  
  fill(240);
  triangle(365, 100, 472, 160, 500, 68); // 갈색 위 흰색 삼각형
  
  // 2. 음양 문양 (위치를 y축 기준 위로 30픽셀 올림: 270 -> 240)
  stroke(0);
  strokeWeight(0);
  
  let yinYangX = 125;
  let yinYangY = 240; // 기존 270에서 240으로 변경하여 위로 이동
  
  // 음양 전체 바깥 원 (검은색 반원 + 흰색 반원)
  fill(0);
  arc(yinYangX, yinYangY, 200, 200, HALF_PI, HALF_PI + PI);
  fill(255);
  arc(yinYangX, yinYangY, 200, 200, HALF_PI + PI, HALF_PI);
  
  // 내부 맞물리는 원들
  fill(255);
  arc(yinYangX, yinYangY + 50, 100, 100, HALF_PI, HALF_PI + PI);
  fill(0);
  arc(yinYangX, yinYangY - 50, 100, 100, HALF_PI + PI, HALF_PI);

  
  // 3. 칼집/낙서 모양
  stroke(0);  
  strokeWeight(4);
  line(400, 110, 472, 120);
  line(400, 100, 472, 105);
  line(440, 85, 450, 140);
  line(455, 85, 460, 140);
  line(480, 85, 430, 130);
  line(450, 85, 420, 125);
  
  // 4. 입체 큐브
  noStroke();
  fill(0, 255, 0);     // 윗면: 초록색
  quad(260, 30, 310, 55, 260, 80, 210, 55);
  fill(247, 56, 11);   // 왼쪽: 빨간색 계열
  quad(210, 55, 260, 80, 260, 130, 210, 105);
  fill(13, 13, 255);   // 오른쪽: 파란색
  quad(260, 80, 310, 55, 310, 105, 260, 130);
  
  // 5. 바코드 및 가림막 레이어
  stroke(0);
  strokeWeight(20);
  noFill();
  arc(260, 200, 500, 100, 0, HALF_PI); // 검은색 굵은 곡선
  
  // 배경색과 맞춰서 곡선 일부를 가리는 사각형들
  fill(255, 255, 204);
  noStroke();
  quad(330, 320, 230, 245, 300, 200, 320, 300);
  fill(204, 240, 153);
  quad(450, 180, 600, 200, 490, 240, 480, 200);
  
  // 바코드 잔선들
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
  
  // 6. 하단 겹친 삼각형 (선 두께 줄임: 8, 6, 4 -> 4, 3, 2)
  x1 = 240; y1 = 290;
  x2 = 300; y2 = 360;
  x3 = 200; y3 = 360;
  cx = (x1 + x2 + x3) / 3;
  cy = (y1 + y2 + y3) / 3;

  // 제일 바깥 큰 삼각형 (두께 4)
  strokeWeight(6); stroke(0); fill(255, 228, 181);
  triangle(x1, y1, x2, y2, x3, y3);

  // 중간 삼각형 (두께 3, 고정 비율 0.65)
  strokeWeight(5); fill(255, 228, 181);
  triangle(
    cx + (x1 - cx) * 0.65, cy + (y1 - cy) * 0.65,
    cx + (x2 - cx) * 0.65, cy + (y2 - cy) * 0.65,
    cx + (x3 - cx) * 0.65, cy + (y3 - cy) * 0.65
  );

  // 제일 안쪽 작은 삼각형 (두께 2, 고정 비율 0.3)
  strokeWeight(4); fill(255, 228, 181); 
  triangle(
    cx + (x1 - cx) * 0.3, cy + (y1 - cy) * 0.3,
    cx + (x2 - cx) * 0.3, cy + (y2 - cy) * 0.3,
    cx + (x3 - cx) * 0.3, cy + (y3 - cy) * 0.3
  );
  
  // 7. 우하단 고정된 행성
  push(); 
  translate(515, 295); 

  // 행성 본체
  noStroke();
  fill(0, 0, 153);
  circle(0, 0, 52); 

  // 행성 표면 점들
  strokeWeight(3);
  stroke(255, 255, 0); // 노란색 점들
  point(-12, 2); 
  point(-2, 11); 
  point(10, -15);

  stroke(252, 102, 52); // 중앙 주황색 큰 점
  strokeWeight(8);
  point(4, 0); 

  stroke(0, 51, 255); // 파란색 점
  strokeWeight(5);
  point(-1, -15); 
  noStroke();

  // 고리/아치 표현
  noFill();
  stroke(255, 102, 0);
  strokeWeight(3);
  arc(0, 0, 90, 35, radians(324), radians(216));
  arc(0, 0, 35, 90, radians(54), radians(307));

  pop(); 
  
  noLoop();
}