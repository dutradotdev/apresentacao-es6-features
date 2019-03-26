const data = [
    {
        nome: 'Lucas',
        idade: 20,
        comida: 'Chocolate'
      },
      {
        nome: 'José',
        idade: 25
      },
      {
        nome: 'Lourdes',
        idade: 35,
        comida: 'Pizza'
      }
]

//retorna apenas José pois José é o primeiro que satisfaz
//tal condição
const arrayFind = data.find(person => person.idade > 24)
const arrayFindIndex = data.findIndex(person => person.idade > 24)
console.log(arrayFind);
console.log(arrayFindIndex);
console.log(data[arrayFindIndex])