// gerar valor padrão
function soma1(a,b,c)
{
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log("-----------1---------")
console.log(soma1())
console.log(soma1(10,20))
console.log(soma1(10,20,30))
console.log(soma1(0,0,0))

//outras estrategias 
function soma2(a,b,c)
{
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a+b+c
}
console.log("-----------2---------")
console.log(soma2())
console.log(soma2(10,20))
console.log(soma2(10,20,30))
console.log(soma2(0,0,0))

//valor padrao de es2015
function soma3(a=0,b = 0,c=0)
{
    return a+b+c
}
console.log("-----------3---------")
console.log(soma3())
console.log(soma3(10,20))
console.log(soma3(10,20,30))
console.log(soma3(0,0,0))