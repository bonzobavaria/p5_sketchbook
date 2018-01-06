let angle = 0

  function preload() {
    img = loadImage("./squirrel.png")
  }

  function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
  }

  function draw() {
    background(0)
    ambientLight(100)
    rotateX(angle)
    rotateY(angle * 0.8)
    rotateZ(angle * 0.3)
    texture(img)
    box(200)
    angle += 0.03
  }