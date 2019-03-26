class Animal {
  constructor(name) {
    this._name = name
  }

  hello() {
    return `Hello!! I'm ${this._name}`
  }
}
  
class Dog extends Animal {
  constructor(name, sound) {
    super(name)
    this._sound = sound
  }

  bark() {
    return `${this._sound}! I'm ${this._name}`
  }

  set sound(sound){
    this._sound = sound
  }
}
  
const elephant = new Animal('Zé')
console.log(elephant.hello())

const dog = new Dog('Rex', 'auau')
console.log('Bark:', dog.bark())
console.log('Hello:', dog.hello())
dog.sound = 'meow'
console.log('Dog:', dog)