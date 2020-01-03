const aprovados = ["Agatha","Jose","Maria",]

aprovados.forEach(function(nome,indice) //tem como primeiro parametro o nome, o segundo o indice e o terceiro um array
{
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)