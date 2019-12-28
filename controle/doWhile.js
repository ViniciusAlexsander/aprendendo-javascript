function InteiroEntre(min,max)
{
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do
{
    opcao = InteiroEntre(-1,10)
    console.log(`O número é: ${opcao}`)
    
}while(opcao != -1)