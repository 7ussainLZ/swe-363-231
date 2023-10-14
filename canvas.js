const canvas = document.querySelector('.myCanvas');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight - 85;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(256,256,256)';
ctx.fillRect(0, 0, width, height);

const colorPicker = document.querySelector('input[type="color"]');
const sizePicker = document.querySelector('input[type="range"]');
const output = document.querySelector('.output');
const clearBtn = document.querySelector('button');

// covert degrees to radians
function degToRad(degrees) {
  return degrees * Math.PI / 180;
};

// update sizepicker output value

// store mouse pointer coordinates, and whether the button is pressed
let curX;
let curY;
let pressed = false;

// update mouse pointer coordinates
document.addEventListener('mousemove', e => {
  curX = e.clientX
  curY = e.clientY
});

canvas.addEventListener('mousedown', () => pressed = true);
canvas.addEventListener('mouseup', () => pressed = false);
clearBtn.addEventListener('click', () => {
  ctx.fillStyle = 'rgb(256,256,256)';
  ctx.fillRect(0, 0, width, height);
});

let size = 10

function draw() {
  ctx.fillStyle = "rgb(0,0,0)";

  if (pressed) {
    ctx.beginPath();
    ctx.arc(curX, curY-50 , 10, degToRad(0), degToRad(360), false);
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();