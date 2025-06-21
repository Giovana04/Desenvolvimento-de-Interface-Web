let textoOriginal = prompt("10 - Digite uma palavra ou frase para inverter:")
if (textoOriginal) {
    let textoInvertido = textoOriginal.split('').reverse().join('')
    console.log("Original: \"" + textoOriginal + "\"")
    console.log("Invertido: \"" + textoInvertido + "\"")
} else {
    console.log("Nenhum texto foi digitado")
}