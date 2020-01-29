const tec = new Map()
tec.set("React", {isFramework: false})
tec.set("Angular", {isFramework: true})

console.log(tec.get("React").isFramework)

const chavesVariadas = new Map([
    [function () { }, "Funcao"],
    [{}, "Objeto"],
    [123,"Numero"]
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123,"a")
console.log(chavesVariadas.get(123))