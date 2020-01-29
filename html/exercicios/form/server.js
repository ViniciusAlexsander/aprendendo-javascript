const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true})); //Sem isso ele não transforma os dados para serem entendidos

app.post('/usuarios', (req, resp)=> {
    console.log(req.body);
    resp.send(`<h2>Parabéns, usuario cadastrado</h2>`);
})

app.post('/usuarios/:id', (req, resp)=> {
    console.log(req.params.id);
    console.log(req.body);
    resp.send(`<h2>Parabéns Usuário Alterado</h2>`);
})

app.listen(3003)