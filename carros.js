//Variáveis Carros
let alturaCarro = 30
let comprimentoCarro = 30

//Listas
let xCarros = [510, 490, 550, 530, 600, 580, 610]
let yCarros = [320, 270, 215, 150, 100, 50, 20]
let velocidadeCarros = [3.5, 4, 5, 4.5, 3, 3.8]

function mostrarCarros() {
  for (let i = 0; i < carros.length; i++){
    image(carros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro)
  }
}
function movimentoCarro() {
  xCarros[0] -= velocidadeCarros[0]
  xCarros[1] -= velocidadeCarros[1]
  xCarros[2] -= velocidadeCarros[2]
  xCarros[3] -= velocidadeCarros[3]
  xCarros[4] -= velocidadeCarros[4]
  xCarros[5] -= velocidadeCarros[5]
  xCarros[6] -= velocidadeCarros[6]
  
  if(xCarros[0] < -50) {
    xCarros[0] = 510
  }
  
   if(xCarros[1] < -50) {
    xCarros[1] = 510
  }
   if(xCarros[2] < -50) {
    xCarros[2] = 490
  }
   if(xCarros[3] < -50) {
    xCarros[3] = 550
  }
   if(xCarros[4] < -50) {
    xCarros[4] = 600
  }
   if(xCarros[5] < -50) {
    xCarros[5] = 580
  }
  if(xCarros[6] < -50) {
    xCarros[6] = 580
  }
}