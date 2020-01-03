const pilotos = ["Vettel","Alonso","Raikkonen","Massa"]
pilotos.pop() //exclui o ultimo elemento
console.log(pilotos)

pilotos.push("Verstappen")//adiciona como ultimo elemento
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento
console.log(pilotos)

pilotos.unshift("Hamilton") //Adiciona um elemento no primeiro indice
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0,"Bottas","Massa")
console.log(pilotos)

//remove
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //gera um novo array apartir do ind indicado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) //vai ate o ind 4 mas não inclui ele no array
console.log(algunsPilotos2)