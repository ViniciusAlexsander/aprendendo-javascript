const produto = new Object
produto.nome = "Cadeira"
produto['marca do produto'] = "Generica"
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)


const carro = {
    modelo: "uno",
    valor: 1230,
    proprietario: {
        nome:"Jose",
        endereco: {
            rua: "RUA ABC",
            numero: 123
        }
    },
    condutores: [{
        nome: "Abc",
        idade: 10
    }]
}

carro.proprietario.endereco.numero = 10000
carro['proprietario']['endereco']['rua'] = "Rua nova"
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores)
