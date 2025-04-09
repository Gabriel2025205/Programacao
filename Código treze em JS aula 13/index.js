let valores = [5, 3, 7, 9, 2, 3]
valores.sort()
for( let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let pos = valores.indexOf(5)
console.log(`O valor 5 encontra-se na posição ${pos}`)