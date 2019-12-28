function imprimirSoma(a,b){
    console.log(a+b)
}
imprimirSoma(2,3)
imprimirSoma(2)//vai funcionar, vai somar 2 + indefinido e vai retornar NaN

//funcao com retorno
function soma(a,b = 1){
    return a + b
}
console.log(soma(3,3))
console.log(soma(3,))
