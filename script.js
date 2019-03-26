let myMap = new Map()
myMap.set('Lucas', 20)
myMap.set('José', 30)
myMap.set('Carlos', 35)
myMap.set('João', 40)
myMap.set('Eduardo', 45)
myMap.delete('Lucas')

let mapValues = myMap.values()
console.log(mapValues.next());

for(value of mapValues){
  console.log(value)
}