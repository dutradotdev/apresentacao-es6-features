let obj = {
    nome: 'Lucas',
    cpf: '47015961830'
}

let proxy = new Proxy(obj, {
    get(target, name) {
      if(name === 'cpf') {
        console.log('Informação privilegiada')
      } else {
        console.log(target[name])
        return true
      }
    },
    set(target, name, value) {
      if(name === 'cpf') {
        console.log('Erro. Não é possível alterar seu cpf')
      } else {
        target[name] = value
        console.log(target)  
      }    
    }
})
proxy.cpf = 1111
proxy.nome = `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`
obj.cpf = 1111
console.log('Objeto sem proxy:', obj)