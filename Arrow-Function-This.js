let btn = document.getElementById('btn')

//faz referência ao button
btn.addEventListener('click', function() {
  console.log(this)
})
//faz referência ao window
btn.addEventListener('click', () => {
  console.log(this)
})
