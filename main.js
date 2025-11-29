window.addEventListener('load', function(){
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = GAME.width;
  canvas.height = GAME.height;
  ctx.fillText("happy birthday wenwen here's zhu di")

  console.log(Snake);
  
  function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    Snake.draw(ctx);
    Snake.update();
  }

  setInterval(animate, 500);
});
