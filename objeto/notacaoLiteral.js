const a = 1
const b = 2
const c = 3

const obj1 = { a:a,b:b,c:c}
const obj2 = {a,b,c}
console.log(obj1)
console.log(obj2)

const nomeDoAtributo = "Nota"
const valorDoAtributo = 12.3

const obj3 = {}
obj3[nomeDoAtributo] = valorDoAtributo
console.log(obj3)

const obj4 = {[nomeDoAtributo] : valorDoAtributo}

const obj5 = 
{
    funcao1: function()
    {

    },
    funcao2()
    {

    }
}
console.log(obj5)