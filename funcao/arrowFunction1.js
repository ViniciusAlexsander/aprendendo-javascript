let dobro1 = function (a)
{
    return a * 2;
}

dobro2 = (a) => 
{
    return a * 2;
}

dobro3 = a => 2 * a; //return esta implícito

console.log(dobro1(1));
console.log(dobro2(2));
console.log(dobro2(3));

fala = () => console.log("ola");
fala()