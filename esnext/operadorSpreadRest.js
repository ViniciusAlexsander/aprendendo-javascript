// rest(juntar) / spread(espalhar)

//usar spread com objetos
const funcionario = {
    nome: "Maria",
    salario: 12345.6
}
const clone = {ativo: true, ...funcionario}

console.log(clone)

// usar no array
const grupo1 = ["1","2","3"]
const grupoFinal = ["4", "5",...grupo1, "6"]
console.log(grupoFinal)