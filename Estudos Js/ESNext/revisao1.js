// let e const 

{
    var a = 2 
    let b = 3
    console.log(b)
}

console.log(a)

// template String

const produto = 'Ipad'
console.log(`${produto} é caro!`)

// Destructuring

const [l, e, ...tras] = "cod3r"
console.log(l,e,tras)

const {idade, nome} = { nome : 'Ana', idade: 9}
console.log(idade,nome)