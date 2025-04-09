function clicar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        alert(' [ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = ' 300px'
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'criança-homem.png')
            } else if(idade > 10 && idade <= 20){
                //Adolescente!
                img.setAttribute('src', 'homem-jovem.png')
            } else if(idade > 20 && idade <= 50){
                //Adulto!
                img.setAttribute('src', 'homem-jovem.png')
            } else{
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        }
        if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'criança-menina.png')
            } else if (idade > 10 && idade <= 20){
                //Adolescente!
                img.setAttribute('src', 'mulher-jovem.png')
            } else if(idade > 20 && idade <= 50){
                //Adulto!
                img.setAttribute('src', 'mulher-jovem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }    
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        }
} 