//Variáveis de sons e imagens
let estradaImagem
let jogadorPersonagem
let carro1
let carro2
let carro3
let trilhaSonora
let somColisao
let somPontos

//Adicionar imagens e sons
function preload() {
  estradaImagem = loadImage("./imagens/estrada.png")
  jogadorPersonagem = loadImage("./imagens/ator-1.png")
  carro1 = loadImage("./imagens/carro-1.png")
  carro2 = loadImage("./imagens/carro-2.png")
  carro3 = loadImage("./imagens/carro-3.png")
  carros = [carro1, carro2, carro3, carro1, carro2, carro3]
  
  trilhaSonora = loadSound("./sons/trilha.mp3")
  somColisao = loadSound("./sons/colidiu.mp3")
  somPontos = loadSound("./sons/pontos.wav")
}