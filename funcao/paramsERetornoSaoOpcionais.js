function area(largura,altura)
{
    let area = largura * altura
    if(area === 10)
    return `Sua area deu ${area}`
    else
    return area 
}

console.log(area(5,2))
console.log(area(10,2))
