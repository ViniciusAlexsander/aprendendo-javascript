const porta = 3003 

const express = require("express")
const app = express()
const bancoDeDados = require("./bancoDeDados.js")
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: true}))//pra qualquer requisição ele vai usar isso

app.get("/produtos", (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) //vai converter para JSON
})

app.get("/produtos/:id",(req,res,next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post("/produtos",(req,res,next) => {
    const produto = bancoDeDados.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Vai gerar um JSON
})

app.delete("/produtos/:id",(req,res,next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) 
})

app.listen(porta, () => {
    console.log(`Servidor esta sendo executado na porta ${porta}`)
})

