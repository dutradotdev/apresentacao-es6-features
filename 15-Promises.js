let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(true) {
        resolve('Hello World')
      } else {
        reject('Erro!!!!!')
      }
    }, 2000)
  })
  
//simples
prom.then(data => console.log(data))
    .catch(err => console.log(err))
  
//posso encadear funções
prom.then(data => {
  console.log(data)
  return 'foo'
})
.then(data => console.log(data))
.then(data => console.log(prom))
.catch(err => console.log(err))
  