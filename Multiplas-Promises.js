const countries = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['Brazil', 'Chile', 'Argentina'])    
    }, 2000)
  })
  
  const foods = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['Feijoada', 'Pizza', 'Chocolate'])
    }, 500)
  })
  
  //Olha a Promise que demora mais para resolver
  Promise.all([countries, foods])
         .then(data => console.log('All:', data))
  
  //Quando a primeira promise do array resolver, ele retorna
  Promise.race([countries, foods])       
         .then(data => console.log('Race:', data))