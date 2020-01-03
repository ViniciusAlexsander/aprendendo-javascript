const alunos = [
    {nome: "Maria", nota: 7.9},
    {nome: "joao", nota: 9.2}
]

//Imperativo //O como é feito é mais importante do que o que deve ser feito
let total = 0
for(let i = 0;i<alunos.length;i++) {
    total += alunos[i].nota
}
let media = total/alunos.length
console.log(media)
//Declarativa //O que deve ser feito é mais importante de como pode ser feito
const getNota = aluno => aluno.nota
const soma = (total, atual) => total+atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)
