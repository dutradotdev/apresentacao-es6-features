//jeito antigo
function helloAntigo(nome, sobrenome) {
  nome = nome || 'Lucas'
  sobrenome = sobrenome || 'Dutra'
  console.log(`Olá ${nome} ${sobrenome}`)
}
  
helloAntigo() //Olá Lucas Dutra
helloAntigo('José', 'Pereira') //Olá José Pereira
helloAntigo('José') //Olá José Dutra
  
  //jeito novo
function helloNovo(nome = 'Lucas', sobrenome = 'Dutra') {
  console.log(`Olá ${nome} ${sobrenome}`)
}
  
helloNovo() //Olá Lucas Dutra
helloNovo('José', 'Pereira') //Olá José Pereira
helloNovo('José') //Olá José Dutra