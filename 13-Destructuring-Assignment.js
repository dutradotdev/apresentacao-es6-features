let data = {
    nome: 'Lucas',
    idade: 20,
    comida: 'chocolate',
    trabalho: {
        empresa: 'IBM',
        cargo: 'desenvolvedor'
    }
  }
  
  //modo antigo de extrair variáveis
  let nomeAntigo = data.nome
  let idadeAntigo = data.idade
  
  //modo novo de extrair variáveis
  let { nome, idade, comida } = data
  let { empresa, cargo } = data.trabalho
  console.log(nome, idade, comida, empresa, cargo)

  //retirando o atributo empresa e nomeando a variável
  //como company
  let { empresa: company } = data.trabalho
  console.log(company)

  //posso fazer com arrays também
  let numeros = [1, 2, 3, 4, 5]
  let [um, dois, ...resto] = numeros
  console.log(um, dois, resto)
