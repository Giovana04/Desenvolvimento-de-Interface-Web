let numeroInteiro = parseInt(prompt("6 - Digite um número inteiro:"))
if (!isNaN(numeroInteiro)) {
    if (numeroInteiro % 2 === 0) {
        console.log("O número " + numeroInteiro + " é PAR.")
    } else {
        console.log("O número " + numeroInteiro + " é ÍMPAR.")
    }
} else {
    console.log("digite um n inteiro válido.")
}