const prompt = require("prompt-sync")();
const numero = prompt("Digite um numero: ")
if (numero % 2 == 0)
    console.log("Numero é par")
else 
    console.log("Numero é impar")