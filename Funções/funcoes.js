// Funções são blocos de códigos onde podemos invocar a qualquer momento.

// Exp.

/* function quadrado(valor) {
  return valor * valor
}

console.log(quadrado(10) * quadrado(10))*/

//
// Numa function podemos passar mais de 1 parâmetro, só separar por virgula.

// Criar uma função que retorna um valor ou um procedimento que não retorna um valor

// Forma  de organizar os códigos

//

//Exemplo Prático com funções

function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2)
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso'
  } else if (imc >= 18.5 && imc < 25) {
    return 'Peso ideal'
  } else if (imc >= 25 && imc < 30) {
    return 'Sobrepeso'
  } else if (imc >= 30 && imc < 40) {
    return 'Obesidade grau I'
  } else if (imc >= 40 && imc < 50) {
    return 'Obesidade grau II'
  } else {
    return 'Obesidade grau III'
  }
}

function main() {
  const peso = 75
  const altura = 1.75

  const imc = calcularImc(peso, altura)
  console.log(classificarImc(imc))
}

main()
