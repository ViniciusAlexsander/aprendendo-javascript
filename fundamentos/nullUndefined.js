let valor // não inicializada, undefined
console.log(valor)

valor = null //ausência de valor
console.log(valor)


const produto = {}
console.log(produto.preco) //não existe preço, por isso é undefined
console.log(produto)

produto.preco = 19.90
console.log(produto)

produto.preco = undefined //evite isso
console.log(!!produto.preco)
//delete produto.preco -> vai apagar tudo
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)