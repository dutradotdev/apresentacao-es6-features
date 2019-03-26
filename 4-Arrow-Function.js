let foods = ['pizza', 'chocolate', 'pastel']

//antigo
let love = foods.map(function(food) {
    return `I love ${food}`
})

//ou...
let love1 = foods.map((food) => {
    return `I love ${food}`
})

//ou melhor..
let love2 = foods.map(food => `I love ${food}`)
console.log('Love2: ', love2)

//encadeamento de funções
let order = foods.filter(food => food === 'chocolate')
                 .map(food => `I wanna 1000 ${food}s`)
console.log('Order:', order)                 