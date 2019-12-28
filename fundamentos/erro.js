function imprimirNomeGritado(obj)
{
    try{
        console.log(obj.name.toUpperCase()) 
    } catch(e)
    {
        tratarErroELancar(e)
    }
    finally
    {
        console.log("ACABOUU")
    }
    
}
function tratarErroELancar(erro)
{
    console.log("A gente é burro e escreveu errado")
    throw "erro 404"
}
const obj = { name: "Vinicius" }
imprimirNomeGritado(obj)