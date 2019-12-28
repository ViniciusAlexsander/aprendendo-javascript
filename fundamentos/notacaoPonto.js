console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = "jose"

console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.imprimir = function(){
        console.log(nome)
    }
}

const obj2 = new Obj("cadeira")
const obj3 = new Obj("Mesa")
obj2.imprimir()
