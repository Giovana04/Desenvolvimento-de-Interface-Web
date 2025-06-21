let n1 = parseFloat(prompt("1 - digite um número: "))
let n2 = parseFloat(prompt("1 - digite um número: "))

console.log("Soma: " + (n1 + n2))
console.log("Subtração: " + (n1 - n2))
console.log("Multiplicação: " + (n1 * n2))
if (n2 !== 0) {
    console.log("Divisão: " + (n1 / n2))
    console.log("Resto: " + (n1 % n2))
} else {
    console.log("Divisão: Não é possível dividir por zero.")
    console.log("Resto: Não é possível calcular o resto com divisão por zero.")
}