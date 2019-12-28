const saudacao = "opa" //contexto léxico 1

function exec() {
    const saudacao = "blz" //contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const client  = {
    nome: "Jose",
    idade: 32,
    peso: 90,
    endereco: {
        rua: "Rua maneira",
        numeroDaCasa: 098
    }
}

console.log(saudacao)
console.log(exec())
console.log(client)