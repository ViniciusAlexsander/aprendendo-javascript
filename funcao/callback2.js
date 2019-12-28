const notas = [1,2,3,4,5,6,7,8,9,10]

//sem callback
let notasAbaixoDe7 = []

for(let i = 0;i<10;i++)
{
    if(notas[i]< 7)
    //notasAbaixoDe7[i] = notas[i] tb funciona
    notasAbaixoDe7.push(notas[i])
}
console.log(notasAbaixoDe7)

//com callback
notasAbaixoDe7 = notas.filter(function (nota){
    return nota<7
})
console.log(notasAbaixoDe7)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

