let waveOffset = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(135, 206, 235); 
  for (let i = 0; i < 10; i++) {
    drawWave(height * 0.3 + i * (height * 0.05), (height * 0.1) - i * (height * 0.01), width * 0.08 - i * 5, i * 0.2);
  }

  // Additional small waves on top
  drawSmallWaves();
  waveOffset += 0.05;
}
function drawWave(y, amplitude, frequency, speedFactor) {
  fill(70, 130, 180, 150);
  beginShape();
  for (let x = 0; x <= width; x += width * 0.03) { // 
    let angle = (x * frequency + waveOffset * speedFactor);
    let waveHeight = sin(angle) * amplitude;
    vertex(x, y + waveHeight);
  }
  vertex(width, height);
  vertex(0, height);     
  endShape(CLOSE);
}
function drawSmallWaves() {
  fill(255);
  for (let i = 0; i < 8; i++) {
    let x = (width * 0.1) + i * (width * 0.1);
    let y = height * 0.4 + sin(i + frameCount * 0.1) * (height * 0.01);
    ellipse(x, y, width * 0.04, height * 0.02); 
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
