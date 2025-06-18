let arr = [1, 2, 3]
arr.reverse() // inverte a ordem dos elementos do array
console.log(arr) // [3, 2, 1]

let soma = arr.reduce(function(acumulador, atual){
    console.log("ac:" + acumulador) // imprime o acumulador e o elemento atual
    console.log("el:" + atual) // imprime o elemento atual
    return acumulador + el // soma todos os elementos do array
})

arr.sort() // ordena os elementos do array em ordem alfabética (ou numérica se forem números)