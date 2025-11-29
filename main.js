window.addEventListener('load', function(){
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = GAME.width;
  canvas.height = GAME.height;

  console.log(Snake);
  
  function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    Snake.draw(ctx);
    Snake.update();

    if (GAME.gameOver){
      ctx.textAlign = 'center';
      ctx.fillStyle = 'black';
      ctx.font = '20px Arial';
      ctx.fillText('happy birthday wenwen here\'s zhu di', GAME.width * 0.5, GAME, height * 0.5);
    }
  }

  setInterval(animate, 500);
});
