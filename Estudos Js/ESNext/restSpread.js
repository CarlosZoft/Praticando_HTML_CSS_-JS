// operador ... rest(Juntar)/spread(Espalhar)
// usar rest com parâmetro de função 


// usar spread com objeto

const funcionario = {
    nome : 'Carlos',
    salario : 12242.99
}
const clone = {ativo : true , ...funcionario}
console.log(clone)

// usar spread com array 

const animais = ['elefante', 'jumento', 'capivara']
const clone1 = ['tartaruga', ...animais]
console.log(clone1)