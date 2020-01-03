const nums = [1,2,3,4,5]

// const array2 = []

// for(let i = 0;i<nums.length;i++)
// {
//     array2.push((nums[i]*2))
// }
// console.log(array2)

//For com propósito //ele gera um novo array com a modificação
let resultado = nums.map(function(e){
    return e*10
})
console.log(resultado)

const soma10 = e => e+10
const triplo = e => e*3
const paraDinheiro = e => `${parseFloat(e).toFixed(2)}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)