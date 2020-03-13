let count = 0
let hue = 0
let sound
let fft
const rectSpacer = 4 

const testFreqs = Array(16).fill(0).map(x => Math.random() * 10)
const generateTestValues = (freqs, count) => 
  freqs.map(freq => sin(freq * (count / 60)) * 0.5 + 0.5)

const xRange = R.range(0, 16)
const yRange = R.range(0, 16)

function preload() {
  sound = loadSound('62.mp3')
}

function setup() {
  createCanvas(800, 600)
  colorMode(HSB)
  sound.amp(0.2)
  fft = new p5.FFT()
  sound.loop()
}

function draw() {
  count++
  const spectrum = fft.analyze()
  const rectWidth = width / 20 
  const rectHeight = height / 20
  xRange.forEach(x => {
    yRange.forEach(y => {
      const spectrumIndex = Math.round(x / 15 * (spectrum.length - 1))
      const normalizedY = y / 15
      // Values in the spectrum array are in the range 0 to 255
      const isLit = spectrum[spectrumIndex] / 255 * 2 > normalizedY
      isLit
        ? fill(x / 16 * 360, 100, 100, 1)
        : fill(0, 255, 10, 0.05)
      rect(
        x * (rectWidth + rectSpacer) + 20, // x position 
        height - (y * (rectHeight + rectSpacer)) + 10, // y position
        rectWidth, 
        rectHeight,
      )
    })
  })
}
