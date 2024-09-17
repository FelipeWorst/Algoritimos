const prompt = require("prompt-sync")();
console.log("Opções de idioma:")
console.log("-----------------")
console.log ("1 - Portugues") 
console.log ("2 - English") 
console.log ("3 - Espanol") 
console.log ("4 - Français") 
console.log ("5 - Japones") 
const plano = prompt("Digite o numero do idioma desejado: ")
switch (plano) {
    case "1" :
        console.log("Idioma configurado para Portugues")
        break
    case "2" :
        console.log("Language set to English")
        break
    case "3" :
        console.log("Idioma configurado a Espanol")
        break
    case "4" :
        console.log("Langue définie sur le Français")
        break
    case "5" :
        console.log("言語を日本語に設定")
        break
    default:
        console.log("Idioma não suportado.")
}