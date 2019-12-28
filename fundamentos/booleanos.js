let isAtivo = false
console.log(typeof isAtivo)

isAtivo = 0
console.log(!!isAtivo)//transforma o isAtivo número em um valor boolean

//alguns verdadeiros
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
//alguns falsos
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(!!(''||null|| 0 ||"blz"))//vai retornar o primeiro valor verdadeiro
let nome = ""
console.log(nome || "Desconhecido")

