const pessoa = 
{
    nome: "Joao"
}
pessoa.nome = "pedro"

//pessoa = { nome: "maria"} -> da erro pq pessoa é uma constante

Object.freeze(pessoa) // não deixa mexer no objeto

pessoa.nome = "Maria"
pessoa.sobrenome = "abc"
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)
