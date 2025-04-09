function clicar(){
  let nome = document.getElementById('nome')
  let cpf = document.getElementById('cpf')

  if (nome.value.length == 0 || cpf.value.length == 0){
    alert('Preencha todos os campos!')
  } else {
    alert('Tudo certo')
  }
}





