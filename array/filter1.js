const produtos = [
    {nome: "NoteBook", preco: 2500, fragil: true},
    {nome: "Ipad Pro", preco: 4200, fragil: true},
    {nome: "Copo de Vidro", preco: 10, fragil: true},
    {nome: "Carro", preco: 10000,fragil: false}
]

console.log(produtos.filter(function(p){
    return p.fragil === true
}))

function produtosCaros(produto) {
    return produto.preco >= 500
}
function produtosFrageis(produto) {
    return produto.fragil 
}
let produtosCarosEFrageis = produtos.filter(produtosCaros).filter(produtosFrageis)
console.log(produtosCarosEFrageis)
