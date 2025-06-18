const arr = [1, 5, 10, "ola", true]

let sohNumeros = arr.some(function(el){ //Se pelo menos um elemento atender a condição (some)
    return typeof el === "number"
})
console.log(sohNumeros) // true, pois 1, 5 e 10 são números