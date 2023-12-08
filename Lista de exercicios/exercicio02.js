function escrevaMeuNome(nome) {
  return 'Meu nome é ' + nome
}

function verificarIdade(idade) {
  if (idade >= 18) {
    console.log(escrevaMeuNome('Paulo') + ' e eu sou maior de idade')
  } else {
    console.log(escrevaMeuNome('Paulo') + ' e eu sou menor de idade')
  }
}

verificarIdade(34)
