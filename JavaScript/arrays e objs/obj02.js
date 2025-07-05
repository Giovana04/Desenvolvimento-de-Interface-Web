let valor = 10

function mudarValor(n){ //funciona igual c++, alterou o valor "copia" do parametro
    n++
    console.log("valor interno: ", n)
}

mudarValor(valor)
console.log("valor externo: ", valor)

let v = [10]

function mudarV(n){
    n.push(20) //aqui o valor do array é alterado, pois o array é um objeto e a referencia do primeiro elemento é passada
    console.log("valor interno: ", n)
}

mudarV(v)
console.log("valor externo: ", v)

function mudarValores(obj1){
    obj1.n++
    console.log("valor interno: ", n)
}
mudarValores(v)


console.log(valor === v)



