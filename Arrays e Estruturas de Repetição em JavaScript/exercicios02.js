// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeros = [7, 12, 24, 54, 73, 25]

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i]

  if (numero % 2 === 0) {
    console.log(numero)
  }
}
