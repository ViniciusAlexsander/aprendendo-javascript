console.log(typeof [])// é um objeto

let aprovados = new Array("Bia","Carlos","Ana")
console.log(aprovados)

aprovados = ["Bia","Carlos","Jose"]
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])// não da erro, aparece como indefinido

aprovados[3] = "Paulo" //Agr existe o elemento no indice 3
aprovados.push("Maria")
console.log(aprovados.length) //adiciona na ultima posição

aprovados[9] = "Rafael" //adiciona no indice 9 e entre o ind 4 até o novo fica como indefinido 
console.log(aprovados)
console.log("-----Ordenado agr-----")
aprovados.sort()//vai ordenar o array, alterando o original
console.log(aprovados)

delete aprovados[1] //vai deletar o elemento e a posição 1 vai ficar indefinido
console.log(aprovados[2])

aprovados = ["Bia","Carlos","Ana"]
aprovados.splice(1,2, "elemento1","elemento2") //o primeiro atributo é pra saber apartir de onde, o outro é até onde
console.log(aprovados)