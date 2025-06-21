let tamanhoArray = parseInt(prompt("4 - Digite o tamanho do array:"))
let arr = []
for (let i = 0; i < tamanhoArray; i++) {
    arr[i] = i + 1
}

arr.forEach(function (el, i) {
    if (el % 2 !== 0) {
        console.log("Elemento ímpar no índice " + i + ": " + el)
    }
})