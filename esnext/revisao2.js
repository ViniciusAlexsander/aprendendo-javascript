// Arrow function 
const soma = (a,b) => a+b
console.log(soma(1,2))

let div = (a,b) => {
    return a/b
}
console.log(div(10,2))

// Arrow function (this)
const lexico1 = () => console.log(this=== exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default
//da um valor padrão caso não passe nada
function log(texto = "Node") {
    console.log(texto)
}

log()
log("Topper")

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1,2,3,4,5))
console.log(total(1,2,3,4,5,6,7,8))