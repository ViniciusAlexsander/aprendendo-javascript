Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i = 0;i<this.length;i++) {
        if(callback(this[i],i,this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}
const produtos = [
    {nome: "NoteBook", preco: 2500, fragil: true},
    {nome: "Ipad Pro", preco: 4200, fragil: true},
    {nome: "Copo de Vidro", preco: 10, fragil: true},
    {nome: "Carro", preco: 10000,fragil: false}
]

function produtosCaros(produto) {
    return produto.preco >= 500
}
function produtosFrageis(produto) {
    return produto.fragil 
}
let produtosCarosEFrageis = produtos.filter2(produtosCaros).filter2(produtosFrageis)
console.log(produtosCarosEFrageis)
