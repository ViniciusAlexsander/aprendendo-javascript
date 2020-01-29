

// não aceita repetição/não indexada
const times = new Set()
times.add("Vasco")
times.add("São Paulo")
times.add("Flamengo").add("Palmeiras")
times.add("Vasco")

console.log(times)
console.log(times.size)
console.log(times.has("vasco"))
console.log(times.has("Vasco"))
times.delete("Flamengo")
console.log(times.has("Flamengo"))

const nomes = ["João", "Maria", "João","Jose"]
const nomesSet = new Set(nomes)
console.log(nomesSet)