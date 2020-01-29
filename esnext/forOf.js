for (let letra of "Vinicius") {
    console.log(letra)
}

const assuntosEcma = ["Map", "Set", "Promise"]

for(let i in assuntosEcma) {
    console.log(i)
}

for(let assunto in assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map ([
    ["Map", {abordado: true}],
    ["set", {abordado: true}],
    ["Promise",{abordado: false}]
])

//vai imprimir tudo
for(let assunto of assuntosMap) {
    console.log(assunto)
}

//vai imprimir apenas a chave
for(let chave of assuntosMap.keys()) {
    console.log(chave)
}

//vai imprimir apenas os valores
for(let valor of assuntosMap.values()) {
    console.log(valor)
}

//vai imprimir as chaves e os valores
for(let [chave, valor] of assuntosMap.entries()) {
    console.log(chave, valor)
}

// EM UM SET
const set = new Set(["a","b","c"])

for(let letra of set) {
    console.log(letra)
}
