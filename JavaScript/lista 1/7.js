let numeroRegressivo = parseInt(prompt("7 - Digite um número para a contagem regressiva:"))
if (!isNaN(numeroRegressivo) && numeroRegressivo >= 0) {
    console.log("Contagem regressiva:")
    for (let i = numeroRegressivo; i >= 0; i--) {
        console.log(i)
    }
} else {
    console.log("digite um número não negativo")
}
