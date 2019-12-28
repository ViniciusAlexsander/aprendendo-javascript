function MeuObjeto(){}
console.log(MeuObjeto.prototype)


const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = "Anonimo"
MeuObjeto.prototype.falar = function(){
    console.log(`Boa tarde meu nome é: ${this.nome}`)
}

obj1.falar()

obj2.nome = "JOSE"
obj2.falar()

const obj3= {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = "Mais um objeto"
obj3.falar()