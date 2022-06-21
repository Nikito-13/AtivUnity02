class Elementos {

   constructor(x, y, velX, velY, color, size) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
      this.color = color;
      this.size = size;
   }
//desenha a bola na tela
   draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 3.14 * Math.PI);
      ctx.fill();
	  
	  ctx.beginPath();
	  ctx.fillStyle = "#F8F8FF";
	  ctx.fillRect(1025,0,20,1000);
	  ctx.stroke();
	  ctx.fill();
	  
	  
	 
	  ctx.beginPath();
      ctx.fillStyle = "#F8F8FF";
      ctx.arc(1035, 475, 50, 0, 2 * Math.PI);
      ctx.fill();
	  
	  
   }
   
   


   //atualiza a posição da bola na tela

   update() {
      if ((this.x + this.size) >= width) {
         this.velX = -(this.velX);
      }

      if ((this.x - this.size) <= 0) {
         this.velX = -(this.velX);
      }

      if ((this.y + this.size) >= height) {
         this.velY = -(this.velY);
      }

      if ((this.y - this.size) <= 0) {
         this.velY = -(this.velY);
      }

      this.x += this.velX;
      this.y += this.velY;
	  
   }
//veruifica a colisão entre as bolas
   collisionDetect(Bolas) {
      for (var bola of Bolas) {
         if (!(this === bola)) {
            const dx = this.x - bola.x;
            const dy = this.y - bola.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
			const x = 1700 - bola.x;
			const y = 1700 - bola.y;

            if (distance < this.size + bola.size) {
             
			  
			  
            }
			
			
         }
      }
   }

}