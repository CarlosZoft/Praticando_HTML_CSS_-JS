// Arrow Function 
const resto = (a,b) => a%b
console.log('resto =',resto(15,5))

//Arrow Function (this)

const lexico1 = () => console.log(this === exports)

// operador rest 

function total(...numeros){
    let total = 0;
    numeros.forEach(n => total += n)
    return total 
}
console.log(total(1,3,4,5))