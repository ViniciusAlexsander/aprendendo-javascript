// recurso novo

const pessoa = {
    nome: "Jose",
    idade: 10,
    endereco: {
        rua: "Rua boa",
        numeroCasa: 123
    }
}

const {nome, idade} = pessoa
console.log(nome,idade)

const {nome: nomeTop,idade: idadeTop} = pessoa
console.log(nomeTop,idadeTop)

const {sobrenome, bemHumorada=true} = pessoa //vai tentar retirar de pessoa essas variaveis, se não achar vai colocar algum valor padrão no caso de bem humorada ou indefinido
console.log(sobrenome,bemHumorada)

const {endereco: {rua,numeroCasa,cep}} = pessoa
console.log(rua,numeroCasa,cep)

//const {conta: {ag,num}}=pessoa isso aqui da erro pq não existe o obj
//console.log(ag,num)

