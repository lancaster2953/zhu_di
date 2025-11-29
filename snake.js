const Snake = {
  position: {x: 0, y: 0},
  velocity: {x: 1, y: 0},
  image: document.getElementById('zhu_di'),
  draw(context){
    context.fillRect(this.position.x * CELL_SIZE, this.position.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    context.drawImage(this.image, this.position.x * CELL_SIZE, this.position.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  },
  update(){
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (
      this.position.x > COLUMNS - 1
    ) {
      this.position.x = 0;
      this.position.y += 1;
    }

    if (this.position.y > ROWS) {
      GAME.gameOver = true;
    }
  }
}
