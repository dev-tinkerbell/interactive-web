let x = 0;
let y = 0;
let moveX = 0;
let moveY = 0;
let speed = 0.05;
let mouse;
let h1 = document.getElementsByTagName('h1')[0];

mouse = document.getElementsByClassName('mouse')[0];

window.addEventListener('mousemove', mouseFunc, false);

// window.addEventListener('click', mouseFunc, false);

function mouseFunc(e) {
  x = e.clientX;
  y = e.clientY;
  mouse.style.transform = `translate(${x}px, ${y}px)`;
}

// loop();
function loop() {
  moveX += (x - moveX) * speed;
  // 움직일 값 += (현재 마우스 위치 - 바로 전 위치 값) * 속도;
  // moveX = (3 - 0) * 0.5 + 0
  // moveX = (3 - 1.5) * 0.5 + 1.5
  // moveX = (3 - 2.25) * 0.5 + 2.25
  // moveX = (3 - 2.625) * 0.5 + 2.625
  // moveX = (3 - 2.81) * 0.5 + 2.81
  // moveX = (3 - 2.9) * 0.5 + 2.9
  moveY += (y - moveY) * speed;
  // h1.innerHTML = `x: ${x}, moveX: ${moveX}`;
  mouse.style.transform = `translate(${moveX}px, ${moveY}px)`;

  window.requestAnimationFrame(loop);
}
