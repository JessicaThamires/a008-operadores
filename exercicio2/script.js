
const primeiroNumero = (prompt("Digite um número:"))
const segundoNumero = (prompt("Digite mais um número:"))

console.log("Os número que você digitou são iguais?", primeiroNumero===segundoNumero)
console.log("O primeiro numero é divisível pelo segundo?", primeiroNumero%segundoNumero===0)
console.log("O segundo numero é divisível pelo primeiro",segundoNumero%primeiroNumero===0)


