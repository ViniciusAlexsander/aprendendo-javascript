//let e const
{
    var a =2
    let b =3
    console.log(b)
}
console.log(a)

//template String
const produto ="Lapis"
console.log(`${produto} é topper`)

// Destructuring
const [l, e, ...tras] = "naoSei"
console.log(l,e,tras)

const [x,y] = [1,2,3]
console.log(x,y)

const {idade, nome} = {nome: "Ana", idade: 102910}
console.log(`${nome}, de ${idade} anos`)
