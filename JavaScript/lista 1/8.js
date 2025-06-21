let nota1 = parseFloat(prompt("8 - Digite a 1 nota:"))
let nota2 = parseFloat(prompt("8 - Digite a 2 nota:"))
let nota3 = parseFloat(prompt("8 - Digite a 3 nota:"))
let nota4 = parseFloat(prompt("8 - Digite a 4 nota:"))

if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3) && !isNaN(nota4)) {
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    console.log("Sua média é: " + media.toFixed(2))
    if (media >= 7) {
        console.log("Você foi APROVADO.")
    } else {
        console.log("Você foi REPROVADO.")
    }
} else {
    console.log("digite notas válidas.")
}