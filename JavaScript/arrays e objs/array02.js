const arr = [1, 5, 10, "ola", true]

let sohNumeros = arr.every(function(el){ //retorna true se todos os elementos atendem a condição (every)
    return typeof el === "number"
})
console.log(sohNumeros) // false, pois "ola" e true não são números