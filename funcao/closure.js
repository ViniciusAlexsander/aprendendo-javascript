//Permite a função acessar e manipular variaveis externas à função


const x = "Global"

function fora()
{
    const x = "Local"
    function dentro()
    {
        return x
    }
    return dentro()
}

const minhaFuncao = fora()
console.log(minhaFuncao)