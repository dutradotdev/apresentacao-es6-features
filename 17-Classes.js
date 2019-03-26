//Quando o atributo tem o mesmo nome do getter, ele chama ele mesmo e vira uma recursão infinita.
//o getter aqui não é um método e sim uma propriedade.
//Usar o _ mostra que o atributo é privado da classe e é uma boa prática
class NewAnimal {
  constructor(sound, kind) {
    this._sound = sound
    this._kind = kind
  }

  hello() {
    console.log(`${this._sound}, I'm a better ${this._kind}`)
  }
  
  get kind(){
    return this._kind
  }

  set kind(kind){
    this._kind = kind
  }
  static info() {
    return 'This is a test class for Animals.'
  }
}

let dogNew = new NewAnimal('auau', 'dog')
let catNew = new NewAnimal('meow', 'cat')
dogNew.hello()
dogNew.kind = 'abelha'
console.log('Kind:', dogNew.kind)
NewAnimal.info()

