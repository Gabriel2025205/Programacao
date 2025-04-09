function finalizar(){
    let valor = 50
    let num = document.getElementById('num')
    let res = document.getElementById('resultado')
    let total = valor * Number(num.value);

    alert(`Valor total é R$ ${total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`);

    res.innerHTML = `Valor total: <strong>${total.toFixed(2)}</strong>`

    prompt('Qual a forma de pagamento?')
}
