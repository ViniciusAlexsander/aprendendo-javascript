//Object.preveentExtensions = deixa trocar o valor, não deixa adicionar, mas permite excluir
const produto = Object.preventExtensions({
    nome: "abc",
    preco: 123,
    codBarra: 0912902
})

produto.nome = "Borracha"
produto.descricao = "Borracha topper"
delete produto.preco
console.log(produto)

//Object.seal = não deixa excluir nem adicionar atributos mas deixa modificar
const pessoa = {
    nome: "Juliana",
    idade: 35
}
Object.seal(pessoa)
pessoa.nome = "Sei la"
pessoa.sobrenome = "ABCKANJ"
delete pessoa.nome
console.log(pessoa)

//Object.freeze = selado + valores constantes