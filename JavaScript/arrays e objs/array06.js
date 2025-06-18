let arr = [1, 3, 5, 7, 9]
arr.push(11, 13) // adiciona 11 ao final do array
console.log(arr) // [1, 3, 5, 7, 9, 11, 13]
let remove = arr.pop() // remove o último elemento do array
console.log(remove) // 13, o último elemento removido

let removido2 = arr.shift() // remove o primeiro elemento do array
console.log(removido2) // 1, o primeiro elemento removido
console.log(arr) // [3, 5, 7, 9, 11]
arr.unshift(2, 4) // adiciona 2 e 4 no início do array
console.log(arr) // [2, 4, 3, 5, 7, 9, 11]


arr.splice(2, 1) // remove 1 elemento a partir do índice 2 - Altera o array original
arr.slice(2,3) // retorna uma cópia do array a partir do índice 2 até o índice 3 (não inclui o índice 3) - Não altera o array original






