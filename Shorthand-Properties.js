let nome = 'Lucas'
let idade = 20
let job = 'developer'

//sem shorthand properties
let person = {
  nome: nome,
  idade: idade,
  job: job,
  whoAreYou: function() {
    console.log(this.nome);
  }
}

//com shorthand properties
let person1 = {
  nome,
  idade,
  job,
  whoAreYou(){
    console.log('name:', this.nome);
  }
}

console.log('person:', person)
person.whoAreYou()
console.log('person1:', person1)
person1.whoAreYou()