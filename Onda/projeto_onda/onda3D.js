/// <reference path="../TSDef/p5.global-mode.d.ts" />
"use strict"

// DESCOBRIR COMO FAZ PRA ESSE DEMONIO NAO FICAR EM RADIANOS
// PS: PFV RAPAZIADA DOS EUA VSFD

let tamanhoBox = 20
let tamanhoGrid
let angulo = 0
let deg30
let distMax

function setup() {
  createCanvas(windowWidth-2, windowHeight-3, WEBGL)
  tamanhoGrid = createVector(20, 0, 20)
  deg30 = atan(1/sqrt(2))
  distMax = dist(0,0,200,200)
}

function draw() {
  background(51)
  stroke(0)
  strokeWeight(5)

  rotateX(-deg30)
  rotateY(-QUARTER_PI)

  push()
  fill(0,0,255)
  translate(-width/12,0,-height/8)
  // noStroke()
  for (let x = 0; x < tamanhoGrid.x; x++) {
    push()
    for (let z = 0; z < tamanhoGrid.z; z++) {
      let distAtual = dist(x*tamanhoBox,z*tamanhoBox,0,0) 
      let offset = map(distAtual,0,distMax, -PI, PI)
      let anguloAtual = angulo + offset
      let y = floor(map(sin(anguloAtual),-1,1,tamanhoBox*2,tamanhoBox*5))
      box(tamanhoBox,y,tamanhoBox)
      translate(tamanhoBox,0,0)
    }
    pop()
    translate(0,0,tamanhoBox)
  }
  pop()
  angulo += 0.1


}
