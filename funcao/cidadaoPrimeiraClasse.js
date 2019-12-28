//Criar de forma literal
function funcao1()
{
    return "OLA"
}

//Armazenar em uma variavel
const funcao2 = function ()
{

}

//Armazenar em um array
const array = [function (a,b) {return a + b},funcao1,funcao2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const objeto = {}
objeto.falar = function() {return "opa"}
console.log(objeto.falar())

//Passar como parametro
function run(fun)
{
    fun()
}
run(function () {return "opaa"})

//Uma funcao pode retornar uma funcao
function soma(a,b)
{
    return function (c)
    {
        console.log(a+b+c)
    }
}
soma(2,3)(4)
