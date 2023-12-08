// 1) Crie uma classe para representar carros.
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
// gasto em reais para realizar este percurso.

class Carro {
  marca
  cor
  gastoMedioPorKM

  constructor(marca, cor, gastoMedioPorKM) {
    this.marca = marca
    this.cor = cor
    this.gastoMedioPorKM = gastoMedioPorKM
  }

  calcularGastoDeViagem(distanciaEmKm, precoCombustivel) {
    return distanciaEmKm * this.gastoMedioPorKM * precoCombustivel
  }
}

const uno = new Carro('Fiat', 'Prata', 1 / 12)
console.log(uno.calcularGastoDeViagem(70, 5))

const palio = new Carro('Fiat', 'Preto', 1 / 10)
console.log(palio.calcularGastoDeViagem(70, 5))
