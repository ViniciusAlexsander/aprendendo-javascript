const avo = 
{
    atributo1 : "A"

}
const pai = 
{
    __proto__: avo,
    atributo2: "B"
}
const filho =
{
    __proto__:pai,
    atributo3: "C"
}
Object.prototype.atributo0 = 0
console.log(filho.atributo1,filho.atributo0,filho.atributo2,filho.atributo3)

const carro = 
{
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta)
    {
        if(this.velAtual + delta <= this.velMax)
        this.velAtual +=delta
        else
        this.velAtual = this.velMax
    },
    status() {
        return `A velociade atual é: ${this.velAtual}Km/h`
    }
}

const ferrari = {
    modelo: "F40",
    velMax: 324 //sobreescreve
}

const volvo = {
    modelo: "V40",
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

