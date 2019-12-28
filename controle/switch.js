const imprimirResultado = function (nota)
{
    switch (Math.floor(nota))
    {
        case 10:
        case 9:
            console.log("Muito Bom")
            break;
        case 8:
        case 7:
            console.log("Tu passou")
            break;
        case 6:
        case 5:
            console.log("Recuperação")
            break;
        case 4:
        case 3:
        case 2:
        case 1:
            console.log("REPROVADO")
            break;
        default:
            console.log("Escreve uma nota existente")
            break;
    }
}
imprimirResultado(10)
