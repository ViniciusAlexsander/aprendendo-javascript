// tagged templates 
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return "Outra string"
}

const student = "Jose"
const situation = "Aprovado"
console.log(tag `${student} esta ${situation}`)

