const arr = [1, 5, 10, "ola", true]
//const arr = new Array [1, 5, 10, "ola", true]; 

arr.forEach(function(el,i, arr){
    console.log(i+ " - " +el)// imprime o índice e o valor do elemento
})
console.log(arr)
let arr1 = arr.map(function(el, i, arr){
    return el*el
})
console.log(arr1) 
arr1 = arr1.map(function(el, i, arr){
    return el * el
})
console.log(arr1)