function clicar(){
    let tn1 = window.document.getElementById('txtn1')
    let tn2 = window.document.getElementById('txtn2')
    let res = window.document.getElementById('res')
    n1 = Number(tn1.value)
    n2 = Number(tn2.value)
    let s = n1 + n2

    res.innerHTML = `${n1} + ${n2} é igual a ${s}`
}
