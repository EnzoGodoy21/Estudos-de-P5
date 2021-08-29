/// <reference path="../TSDef/p5.global-mode.d.ts" />
"use strict"


// Importante saber que não consegui deixar agradavel
// todos os slides e colocar um identificador em cada um portanto
// para identificar qual slide faz o que
// se guie pela sequencia das variaveis da linha 20 a 29

// Variaveis do Grid
let tamanhoGrid
let tamanhoBox

// Variaveis do OFFSET
let angulo = 0
let deg30
let distMax

// Sliders
let sldTamanhoBox
let sldAgitacao
let sldTamanhoGridX
let sldTamanhoGridZ
let sldStroke
let sldStrokeWeight
let sldOndaX
let sldOndaZ
let sldRotX
let sldRotY

let wWidth = 500
let wHeight = 300

function setup() {
  createCanvas(wWidth * 2, wHeight * 2, WEBGL)
  deg30 = atan(1 / sqrt(2))

  // SLIDERS
  sldTamanhoBox = createSlider(10, 30, 20, 1)
  sldAgitacao = createSlider(50, 300, 200, 1)

  sldStroke = createSlider(0, 255, 255, 1)
  sldStrokeWeight = createSlider(0.1, 10, 1, 0.1)

  sldTamanhoGridX = createSlider(1, 20, 10, 1)
  sldTamanhoGridZ = createSlider(1, 20, 10, 1)

  // O slider vai de 0 a 200 
  // porem é o ideal para caso o tamanhoBox seja 20
  // e o tamanhoGrid seja 10 e 10
  sldOndaX = createSlider(0, 200, 0, 1)
  sldOndaZ = createSlider(0, 200, 0, 1)

  sldRotX = createSlider(-180,180,-30,1)
  sldRotY = createSlider(-180,180,-45,1)
}

function draw() {
  // Cores
  background(51)
  stroke(sldStroke.value())
  strokeWeight(sldStrokeWeight.value())

  // Valores dos Slides
  tamanhoGrid = createVector(sldTamanhoGridX.value(), 0, sldTamanhoGridZ.value())
  tamanhoBox = sldTamanhoBox.value()
  distMax = dist(0, 0, 1, sldAgitacao.value())
  let ondaX = sldOndaX.value()
  let ondaZ = sldOndaZ.value()

  // POV
  // Importante saber que o ideal seria converter o codigo
  // totalmente para Graus porem não entendi completamente
  // então utilizarei dessa gambiarra até que eu aprenda
  angleMode(DEGREES)
  rotateX(sldRotX.value())
  rotateY(sldRotY.value())
  angleMode(RADIANS)

  push()

  fill(0, 0, 255)

  translate(-width / 12, 0, -height / 8)
  for (let x = 0; x < tamanhoGrid.x; x++) {
    push()
    for (let z = 0; z < tamanhoGrid.z; z++) {
      let distAtual = dist(x * tamanhoBox, z * tamanhoBox, ondaX, ondaZ)
      let offset = map(-distAtual, 0, distMax, -PI, PI)
      let anguloAtual = angulo + offset
      let y = floor(map(sin(anguloAtual), -1, 1, tamanhoBox * 2, tamanhoBox * 5))
      box(tamanhoBox, y, tamanhoBox)
      translate(tamanhoBox, 0, 0)
    }
    pop()
    translate(0, 0, tamanhoBox)
  }
  pop()
  angulo += 0.02


}

