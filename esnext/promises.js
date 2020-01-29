function falarDepoisDe(segundos, frase) {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(2,"OLA")
.then(frase => frase.concat("td"))
.then(maisUmaFrase => console.log(maisUmaFrase))
.catch(e => console.log(e))
//caso de erro com o reject usa o catch
//pode usar o .then varias vezes

