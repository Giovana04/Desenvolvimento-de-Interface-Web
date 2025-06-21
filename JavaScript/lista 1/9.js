let listaNumeros = []
for (let i = 0; i < 10; i++) {
    listaNumeros.push(Math.floor(Math.random() * 100) + 1)
}
console.log("Números: " + listaNumeros.join(", "))

let maiorNumero = listaNumeros[0]
for (let i = 1; i < listaNumeros.length; i++) {
    if (listaNumeros[i] > maiorNumero) {
        maiorNumero = listaNumeros[i]
    }
}
console.log("O maior número é:" + maiorNumero)