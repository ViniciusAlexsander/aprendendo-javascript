const pessoa = 
{
    saudacao: "bom dia",
    falar() 
    {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar2 = pessoa.falar

falar2() 

const falarDaPessoa = pessoa.falar.bind(pessoa)
falarDaPessoa()