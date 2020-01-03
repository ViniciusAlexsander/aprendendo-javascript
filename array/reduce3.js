Array.prototype.reduce2 = function(callback) {
    let acumulador = this[0]
    for(let i = 1;i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}
const alunos = [
    {nome: "Jose", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true}
]

//Desafio1: Todos os alunos são bolsistas?
const existeBolsista = function(resultado,bolsista) {
    return resultado && bolsista
} 
console.log(alunos.map(a => a.bolsista).reduce2(existeBolsista))

//Desagio2: Algum aluno é bolsista?
const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce2(algumBolsista))