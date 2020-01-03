Array.prototype.forEach2 = function(callback) {
    for(let i = 0;i<this.length;i++)
    {
        callback(this[i],i,i)
    }
}

const aprovados = ["Agatha","Jose","Maria",]

aprovados.forEach2(function(nome,indice) //tem como primeiro parametro o nome, o segundo o indice e o terceiro um array
{
    console.log(`${indice + 1}) ${nome}`)
})