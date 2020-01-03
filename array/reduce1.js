const alunos = [
    {nome: "Jose", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual) //como se fosse um acumulador, ele percorre todo o array fazendo a soma de algo em especifico (pelo menos eu entendi isso)
{
    console.log(acumulador,atual)
    return acumulador + atual
})
console.log(resultado)