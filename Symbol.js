let foo = Symbol('foo')
let bar = Symbol('foo')

console.log('foo === bar:', foo === bar) //false
console.log('foo == bar:', foo == bar) //false

 //Onde isso é útil?
let obj = {
   name: 'Lucas',
   name: 'Lucas',
   name: 'Lucas',
   idade: 20
}
 console.log('obj:', obj)

let objSym = {
  [Symbol('name')]: 'Lucas',
  [Symbol('name')]: 'Lucas',
  [Symbol('name')]: 'Lucas',
  idade: 20
}
console.log('objSym:', objSym)

console.log('Obj Keys:', Object.keys(objSym))
console.log('Symbol Keys:', Object.getOwnPropertySymbols(objSym))

const syms = Object.getOwnPropertySymbols(objSym)
const symsValues = syms.map(sym => objSym[sym])
console.log('Values from symbol keys', symsValues) //symbols values