//Objeto a gente declara com '{}'

// FORMA LITERAL

const pessoa = {
  nome: 'Paulo Trindade',
  idade: 35,

  // método recebe uma função
  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
  }
}

// // Aqui eu ecrementei um valor
// paulo.altura = 1.76

// // Aqui eu deletei um valor ao objeto
// delete paulo.nome

// console.log(paulo)

// *****-----------------------*****

// Outra forma de acessar e saber o atributo
// const atributo = 'idade'
// console.log(pessoa[atributo])

// *********************************

// Classe é a definição do que deve ser o objeto
class Pessoa {
  nome
  idade

  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.anoDeNascimento = 2023 - idade
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`)
  }
}

// const guilherme = new Pessoa('Guilherme', 02)
// // guilherme.nome = 'Guilhereme Trindade'
// // guilherme.idade = 2

// const jessica = new Pessoa('Jéssica', 33)
// // jessica.nome = 'Jéssica Rocha'
// // jessica.idade = 33

// guilherme.descrever()
// jessica.descrever()

// console.log(jessica)
// console.log(guilherme)

// // Instancia é a ocorrencia do que deve ter o objeto
// const pessoa = {
//   nome: 'Paulo Trindade',
//   idade: 35,

//   // método recebe uma função
//   descrever: function () {
//     console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
//   }
//

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
  }
}

const paulo = new Pessoa('Paulo', 35)
const jessica = new Pessoa('Jessica', 34)
compararPessoas(paulo, jessica)
