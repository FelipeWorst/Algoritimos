let ValorInicial = 1000
for (let i = 0; i < 12; i++){
    ValorInicial = (ValorInicial + (ValorInicial*0.005))
}
console.log(ValorInicial)