//Variáveis do Jogador
let xJogador = 100
let yJogador = 375
let larguraJogador = 20
let alturaJogador = 20

//Varíavel de colisão
let colisao = false;

//Varíavel de pontos
let meusPontos = 0

//Função Desenhar Personagem
function mostrarPersonagem () {
  image(jogadorPersonagem, xJogador, yJogador, larguraJogador, alturaJogador)
}

//Função movimentar jogador
function movimentoJogador() {
  if (keyIsDown(83)) {
    if(yJogador < 375)
      yJogador += 2.5;
  }
  if (keyIsDown(87)) {
    yJogador -= 2.5;
  }
  if (keyIsDown(68)) {
    if(xJogador < 470)
    xJogador += 2.5;
  }
  if (keyIsDown(65)) {
    if(xJogador > 20)
    xJogador -= 2.5;
  }
}

function verificaColisao(){
  for (let i = 0; i < carros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xJogador, yJogador, 10)
    if (colisao){
      respawn()
      subtrairJogador()
      somColisao.play()
    }
  }
}

function respawn() {
  xJogador = 100
  yJogador = 375
}

function mostrarPontos() {
  textSize(25)
  textAlign(CENTER)
  fill(255,240,60)
  text(meusPontos, width / 5, 27)
}

function somarJogador() {
  if (yJogador < 15) {
    meusPontos += 1
    respawn()
    somPontos.play()
  }
}

function subtrairJogador() {
  if(meusPontos > 0){
    meusPontos -= 1
  }
}

function ficarNaTela() {
  return yJogador < 375
}