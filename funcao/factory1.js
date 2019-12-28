//Factory simples

function criarPessoa()
{
    return {
        nome: "Ana",
        sobrenome: "nãosei",
        idade: 12
    }
}

console.log(criarPessoa())



function criarPessoa2(nome,sobrenome,idade)
{
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

console.log(criarPessoa2("Jose","Da silva",200))