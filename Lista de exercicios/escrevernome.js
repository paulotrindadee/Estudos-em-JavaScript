function escrevaMeuNome(nome) {
  return 'Meu nome é ' + nome
}

escrevaMeuNome('Paulo')

function verificarIdade(idade) {
  if (idade >= 18) {
    console.log(
      escrevaMeuNome('Paulo') +
        ' e você é maior de idade. ' +
        'Você tem ' +
        idade +
        ' anos de idade.'
    )
  } else {
    console.log('Você é menor de idade')
  }
}

verificarIdade(33)
