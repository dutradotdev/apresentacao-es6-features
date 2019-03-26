const person = {
    name: 'Lucas',
    drink: 'coffee'
}

//jeito antigo
const oldWay = 'My name is ' + person.name + ' and i like ' + person.drink + '.'
console.log('OldWay:',oldWay)

//jeito novo
const newWay = `My name is ${person.name} and i like ${person.drink}.`
console.log('newWay:', newWay)

//jeito antigo
const oldWayLines = 'banana\n'+ 'apple\n'+'strawberry.'
console.log(oldWayLines)

//jeito novo
const newWayLines = 
`banana
apple 
strawberry.`
console.log(newWayLines)