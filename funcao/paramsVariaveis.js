function soma()
{
    let soma = 1
    for (i in arguments)
    {
        soma += arguments [i]
    }
    return soma
}
console.log(soma())
console.log(soma(2))
console.log(soma("oi","Teu","corno",1))
