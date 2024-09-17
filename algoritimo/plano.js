const prompt = require("prompt-sync")();
console.log ("1 - Basico   R$19.90") 
console.log ("2 - Premium  R$29.90") 
console.log ("3 - Familiar R$39.90") 
const plano = prompt("Digite o numero do plano desejado: ")
switch (plano) {
    case "1" :
        console.log("Plano Básico: Acesso a filmes em 480p, 1 tela")
        break
    case "2" :
        console.log("Plano Premium: Acesso a filmes em 1080p, 4 telas")
        break
    case "3" :
        console.log("Plano Familiar: Acesso a filmes em 4K, até 6 telas simultaneas")
        break
    default:
        console.log("Opção não reconhecida")
}