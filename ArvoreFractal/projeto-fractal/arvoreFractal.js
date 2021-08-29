/// <reference path="../TSDef/p5.global-mode.d.ts" />

"use strict"

var angulo
var slider

function setup() {
  createCanvas(600,600)
  slider = createSlider(0,PI,QUARTER_PI,0.01)
}

function draw() {
  background(51)
  stroke(255)
  translate(width/2,height)
  angulo = slider.value()
  gerarArvore(100,10)
}

function gerarFolha(retornoStroke, angulo){
  rotate(angulo)
  fill(150,255,100)
  noStroke()
  quad(0, 0, 0, -10, -15, -15, -10, 0)
  stroke(255)
  strokeWeight(retornoStroke)  
}

function gerarArvore(altGalho,espGalho){
  strokeWeight(espGalho)
  line(0,0,0,-altGalho)
  translate(0,-altGalho)
  if(altGalho > 10){
    push()
    rotate(angulo)
    gerarArvore(altGalho * 0.67,espGalho*0.67)
    if(altGalho < 15 && altGalho > 10){
      gerarFolha(espGalho*0.67, angulo)
    }
    pop()

    push()
    rotate(-angulo)
    gerarArvore(altGalho * 0.67,espGalho*0.67)
    if(altGalho < 15 && altGalho > 10){
      gerarFolha(espGalho*0.67,angulo)
    }
    pop()
  }

}