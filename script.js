const secretCode = 'bocchi';
let keyBuffer = [];

document.addEventListener('keydown', (e) => {
  keyBuffer.push(e.key.toLowerCase());

  if (keyBuffer.length > secretCode.length) {
    keyBuffer.shift();
  }
  if (keyBuffer.join('') === secretCode) {
    triggerBocchiPanic();
    keyBuffer = []; 
  }
});

function triggerBocchiPanic() {
  const box = document.querySelector('.box');
  const body = document.body;

  if (!box) return;

  box.classList.add('bocchi-panic');
  body.classList.add('panic-mode');

  setTimeout(() => {
    box.classList.remove('bocchi-panic');
    body.classList.remove('panic-mode');
  }, 3500);
}