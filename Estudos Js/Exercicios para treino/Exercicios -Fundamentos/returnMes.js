/*Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
 */

const returnMes = (mes) =>{
    if(mes===1)return 'janeiro'
    if(mes===2)return 'fevereiro'
    if(mes===3)return 'março'
    if(mes===4)return 'abril'
    if(mes===5)return 'maio'
    if(mes===6)return 'junho'
    if(mes===7)return 'julho'
    if(mes===8)return 'agosto'
    if(mes===9)return 'setembro'
    if(mes===10)return 'outubro'
    if(mes===11)return 'novembro'
    if(mes===12)return 'dezembro'
}

console.log(returnMes(1))
console.log(returnMes(4))