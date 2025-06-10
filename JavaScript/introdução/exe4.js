let n = 10
n += 5
n*= 5
n++
console.log("O resultado do resto da divisão de " + n + " por 6 é " + n % 6) // não alterar o valor de n
console.log("O quadrado do resto da divisão de " + n + " por 6 é " + (n % 6) ** 2) // não alterar o valor de n
console.log(n)
n /= 4
console.log("O resultado da divisão por 4 é " + n)