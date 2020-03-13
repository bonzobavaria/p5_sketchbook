class Node {
  constructor(size, color) {
    this.size = size
    this.color = color 
    this.x = random(width)
    this.y = height
    this.speed = random(2)
    this.bias = random(5) - 2.5
  }
  
  drawNode() {
    fill(this.color, 50, 80)
    ellipse(this.x, this.y, this.color)
  }
}
