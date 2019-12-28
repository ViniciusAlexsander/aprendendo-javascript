function pessoa(nome)
{
    this.nome = nome

    this.falar = function()
    {
        console.log(`Meu nome é: ${nome}`)
    }
    
    
}

const pessoa1 = new pessoa("Joao")
pessoa1.falar()