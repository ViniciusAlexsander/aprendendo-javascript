const pessoa = 
{
    nome: "Jose",
    idade: 10,
    peso: 13 
}
console.log(pessoa)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) //Coloca td em um array

Object.entries(pessoa).forEach(element => 
{
    console.log(`${element[0]}: ${element[1]}`)
}); 

Object.defineProperty(pessoa,"dataNascimento",{
    enumerable: true,
    writable: false,
    value: '01/01/2001'
})
pessoa.dataNascimento = "10/10/10"
console.log(pessoa.dataNascimento)

// Object.assign coisa do ecmas 2015
const destino = {
    a: 1
}
const obj1 = {
    b:2
}
const obj2 = {
    c: 3,
    a: 4
}
Object.assign(destino,obj1,obj2)
console.log(destino)
Object.freeze(destino)
destino.a = 1
console.log(destino)