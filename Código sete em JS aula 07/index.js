function clicar() {
    let pais = document.getElementById('txttex').value.trim();
    let campo = document.getElementById('txttex')
    let res = document.getElementById('res');
    
    if (pais.toLowerCase() === 'brasil') {
        res.innerHTML = `Você é BRASILEIRO (A)`;
        alert('È um prazer conhecer-los BRASILEIROS (A)')
    } else if (pais !== '') {
        res.innerHTML = `Você é ESTRANGEIRO (A)`;
        alert('È um prazer conhecer-los ESTRANGEIROS (A)')
    } else {
        alert('Por favor digite um PAIS')
    }

   campo.value = '' ;    

}