const fs = require("fs")

const produto = {
    nome: "Bolo",
    preco: 10,
    tamanho: "Grande",
    desconto: 0.0
}

fs.writeFile(__dirname + "/arquivoGerado.json",JSON.stringify(produto),erro => {
    console.log(erro || "Arquivo salvo com sucesso!")
})
