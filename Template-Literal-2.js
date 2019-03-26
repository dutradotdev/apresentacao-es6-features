//declaro meu array de pessoas
let persons = [
    {
      nome: 'Lucas',
      idade: 20,
      comida: 'Chocolate'
    },
    {
      nome: 'José',
      idade: 50
    },
    {
      nome: 'Lourdes',
      idade:100,
      comida: 'Pizza'
    }
]
    
//seleciono a tabela
let table = document.querySelector('table');
    
//formato cada pessoa para colocar na tabela
table.innerHTML += 
  `${persons.map(person => `
    <tr>
      <td>${person.nome}</td>
      <td>${person.idade}</td>
      <td>${(person.comida) ? person.comida : 'Tá de dieta'}</td>
    </tr>
    `).join('')}
      `