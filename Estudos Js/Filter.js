 const produtos = [
  { nome: 'Notebook', preco : 2499 , fragil :true},
  { nome: 'Ipad Pro', preco : 4199 , fragil :true},
  { nome: 'Copo de Vidro', preco : 12.49 , fragil :true},
  { nome: 'copo de plastico', preco : 18.99 , fragil :false}
]


const eFragil = produto => produto.fragil 
const eCaro = produto => produto.preco > 2000

console.log(produtos.filter(eFragil).filter(eCaro))