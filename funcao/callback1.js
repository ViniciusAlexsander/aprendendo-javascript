const fabricantesDeCarro = ["Mercedes", "Ford", "Fiat"]

function imprimir(nome,indice)
{
    console.log(`${indice + 1}. ${nome}`)
}

fabricantesDeCarro.forEach(imprimir)
fabricantesDeCarro.forEach(function(a){
    console.log(a) 
})