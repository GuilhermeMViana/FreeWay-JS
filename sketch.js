function setup() {
  createCanvas(500, 400);
  trilhaSonora.loop()
}

function draw() {
  mostrarBackground()
  mostrarPersonagem ()
  mostrarCarros()
  movimentoCarro()
  movimentoJogador()
  verificaColisao()
  mostrarPontos()
  somarJogador()
}

function mostrarBackground() {
  background(estradaImagem);
}




