function verificar(){
   let txtv = document.getElementById('txtvel')
   let res = document.getElementById('res')
   let vel = Number(txtv.value)
   res.innerHTML = `A sua velocidade atual é de <strong>${vel}</strong>Km/h`

   if(vel > 60){
    res.innerHTML += `<p>Você ultrapassou o limite da via... <strong>MULTADO!</strong></p>` 
   }

    
   
   res. innerHTML +=       `Dirija sempre com cinto de segurança`
}
