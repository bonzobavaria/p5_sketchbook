let angle = 0

  function preload() {
    img = loadImage("./squirrel.png")
  }

  function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
  }

  function draw() {
    const dirY = (mouseY / height - 0.5) *2;
    const dirX = (mouseX / width - 0.5) *2; 
    background(0)
    ambientLight(255)
    // directionalLight(255, 0, 255, dirX, dirY, 0.25)
    rotateX(angle)
    rotateY(angle * 0.8)
    rotateZ(angle * 0.3)
    texture(img)
    box(200)
    angle += 0.03
  }