/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
*/


const potencia = (base=1,expoente=1) =>{
  return Math.pow(base, expoente)
} 

console.log(potencia(3,2))