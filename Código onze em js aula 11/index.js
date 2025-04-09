function clicar(){
    let ini = document.getElementById('txt1')
    let fim = document.getElementById('txt2')
    let passo = document.getElementById('txt3')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
       window.alert('ERRO, faltam dados!')
    } else {
       res.innerHTML = 'Contando... <br/>'
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if( p <= 0){
        window.alert('Passo invalido, Considerando passo 1')
        p = 1
       }
       if( i< f ){
        for(let c = i; c <= f; c += p){
           res.innerHTML += `${c}`
        }
    }else{
        for(let c = i; c >= f; c -=p){
            res.innerHTML += `${c}`
        }
    }  
  }
}