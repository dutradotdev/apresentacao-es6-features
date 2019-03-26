let front = ['angular', 'vue', 'react']
let back = ['python', 'java', 'ruby']
let fullStack = [...front, 'RxJS', ...back];
console.log(...front)
console.log(fullStack)

//consigo usar o spread p/ parâmetros da função

let numeros = [1, 2, 3]

function sum3Numbers(arg1, arg2, arg3) {
  console.log(arg1 + arg2 + arg3)
}

sum3Numbers(numeros[0], numeros[1], numeros[2]);
sum3Numbers(...numeros)

//rest params
function multiplica(multiplicador, ...args) {
  //args é um array
  return args.map(arg => multiplicador * arg)
}

console.log(multiplica(2, 1, 3, 4, 5, 6, 7))