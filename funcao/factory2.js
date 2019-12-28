function criarProduto(nome,preco)
{
    return {
        nome,
        preco,
        desconto: 0.1
    }

}
console.log(criarProduto("não sei um nome",100))