const soma = function (x,y)
{
    return x + y
}

const imprimirResultado = function (a,b,operacao = soma)
{
    console.log(operacao(a,b))
}

imprimirResultado(1,2)
imprimirResultado(2,3,soma)
imprimirResultado(3,4,function (x,y){
    return x - y
})
imprimirResultado(4,5,(x,y)=> x * y)

const pessoa = {
    falar: function(){
        console.log("boa noite")
    }
}
pessoa.falar()