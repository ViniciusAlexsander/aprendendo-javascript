Number.prototype.entre = function (inicio,fim)
{
    return this >= inicio && this <= fim
}

function imprimirResult(nota)
{
    if(nota.entre(9,10))
    console.log("Muito bom")
    else if(nota.entre(7,8.99))
    console.log("Aprovado")
    else if(nota.entre(4,6.99))
    console.log("Recuperacao")
    else if(nota.entre(0,3.99))
    console.log("Reprovado")
    else
    console.log("nota inválida")

}
imprimirResult(9)