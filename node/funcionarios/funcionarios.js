const urlDeFuncionarios = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require("axios")

axios.get(urlDeFuncionarios).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
    //mulher chinesa com menor salario
    const func = funcionarios
        .filter(filtraChines)
        .filter(filtraMulheres)
        .reduce(filtraMenorSalairo)
    console.log(func)
    
})

const filtraChines = funcionario => funcionario.pais === "China"
const filtraMulheres = funcionario => funcionario.genero === "F"
const filtraMenorSalairo = (funcionarioAnterior,funcionarioAtual) => {
    if(funcionarioAnterior.salario < funcionarioAtual.salario)
    {
        return funcionarioAnterior
    }
    else
    {
        return funcionarioAtual
    }
}


