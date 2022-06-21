// gerencia o Canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;


// gera um número aleatório

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// gera uma cor aleatória

function randomRGB() {
  return `#FFFF00`;
}

function finalcolor() {
  return `#800000`;
}

//define um vetor de bolas
const bolas = [];

while (bolas.length <= 10) {
   const size = random(15,16);
   const bola = new Elementos(
      // posição de sempre uma bola de distância
      // fora das bordas para evitar erros de desenho
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(4,6),
      random(0,0),
      randomRGB(),
      size
   );

   //atualiza o vetor
  bolas.push(bola);
}

//realiza um loop em todas as bolas geradas
function loop() {
   ctx.fillStyle = 'rgba(10, 100, 10, 10)';
   ctx.fillRect(0, 0,  width, height);

   for (const bola of bolas) {
    bola.draw();
	
    bola.update();
    bola.collisionDetect(bolas);
   }

   requestAnimationFrame(loop);
}

loop();