//notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construturas
function Produto(nome,preco,desconto)
{
    this.nome = nome
    this.getPrecoComDesconto = () => 
    {
        return preco * (1-desconto)
    }
}

const p1 = new Produto('Caneta',100,0.20)
console.log(`Preco: ${p1.getPrecoComDesconto()}`)

//Função Factory
function criarFuncionarios(nome,salario,faltas)
{
    return {
        nome,
        salario,
        getSalario() {
            return (salario/30) * (30-faltas)
        }
    }
}

const f1 = criarFuncionarios("João",1000,4)
const f2 = criarFuncionarios("Maria",1000,0)
console.log(f1.getSalario())
console.log(f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

// Uma função que retorna um obj
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON.info)
