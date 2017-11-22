let angle

let slider

function setup() {
  createCanvas(1000,600)
  slider = createSlider(0, TWO_PI, PI / 4, 0.01)
}

function draw() {
  background(51)
  angle = slider.value()
  stroke(255)
  translate(width/2,height)
  branch(100, 1)
}

function branch(len, acc) {
  if (acc > 5) {
    stroke(64,255,128)
  }
  line(0, 0, 0, -len)
  translate(0,-len)

  if (len > 4) {
    push()
    rotate(angle)
    branch(len * 0.67, acc + 1)
    pop()
    push()
    rotate(-angle)
    branch(len * 0.67, acc + 1)
    pop()
  }
}
