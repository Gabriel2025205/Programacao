function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML =`Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //BOOM DIA!!
        img.src = 'imagens/manhã.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora > 12 && hora <= 18){
        //BOA TARDE!!
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE!!
        img.src = 'imagens/noite.png'
        document.body.style.background = '#515154'
    }
}
