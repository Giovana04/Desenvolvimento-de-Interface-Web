let arr = [4, 5,10, 20, 35, 4, 5]
console.log(arr.indexOf(5)) // 1, retorna o índice do primeiro elemento igual a 5
console.log(arr.lastIndexOf(5)) // 6, retorna o índice do último elemento igual a 5
console.log(arr.indexOf(40)) // -1, retorna -1 se não encontrar o elemento
console.log(arr.lastIndexOf(40)) // -1, retorna -1 se não encontrar o elemento
console.log(arr.includes(10)) // true, verifica se o elemento 10 está no array
console.log(arr.includes(40)) // false, verifica se o elemento 40 está no array

let fn1 = arr.find(function(el){
    return el > 10 // retorna o primeiro elemento que atende a condição
})
console.log(fn1) // 20, pois é o primeiro elemento maior que 10

let fn2 = arr.findIndex(function(el){
    return el > 10 // retorna o índice do primeiro elemento que atende a condição
})
console.log(fn1) // 3, pois o elemento 20 está no índice 3

let fn3 = arr.findIndex(function(el){
    return el > 40
})
console.log(fn1) // -1, pois não há elemento maior que 40









