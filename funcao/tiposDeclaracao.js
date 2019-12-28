
soma(1,2)
// function declaration     -> vc consegue chamar a funçao antes dela estar declarada
function soma(a,b)
{
    return console.log(`${a+b}`)
}

//function expression       -> vc não consegue chamar a função antes da declaração
const sub = function(a,b)
{
    return console.log(`${a-b}`)
}
sub(1,2)
// named function expression       -> vc não consegue chamar a função antes da declaração
const mult = function mult(a,b)
{
    return console.log(`${a*b}`)
}
mult(1,2)