let peso = parseFloat(prompt("5 - Digite seu peso:  "))
let altura = parseFloat(prompt("5 - Digite sua altura "))

if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
    let imc = peso / (altura * altura)
    let classificacao = ""

    if (imc < 18.5) {
        classificacao = "Abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal"
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso"
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = "Obesidade Grau I"
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = "Obesidade Grau II"
    } else {
        classificacao = "Obesidade Grau III"
    }
    console.log("Seu IMC é: " + imc.toFixed(2) + " (" + classificacao + ")")
} else {
    console.log("digite valores válidos")
}

