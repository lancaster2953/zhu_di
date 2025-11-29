const Snake = {
  position: {x: 5, y: 0},
  velocity: {x: 1, y: 0},
  draw(context){
    context.fillRect(this.position.x * CELL_SIZE, this.position.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  }
}
