//não existe índice em Set JS. é baseado no iterator
let mySet = new Set([1,1,2,2,3,4,5])
mySet.add(6)
mySet.add('teste')
mySet.delete(1)
console.log('Has teste:', mySet.has('teste'))
console.log('Size:', mySet.size)
console.log('Values:', mySet.values())

let iterator = mySet.values()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

//for..of só funciona para iterators
let newIterator = mySet.values()
for(v of newIterator) {
  console.log('Value in for..of:',v)
}