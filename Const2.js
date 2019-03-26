const pessoa = {
    name: 'Lucas',
    idade: 20
}

console.log('Objeto pessoa:', pessoa)
pessoa.idade = 50
console.log('Objeto pessoa modificado:', pessoa)

pessoa = {
    name: 'José',
    idade: 40
}

//Uncaught TypeError: Assignment to constant variable.
console.log(pessoa)