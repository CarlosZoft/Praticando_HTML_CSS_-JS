class Carro{
    // public
    constructor(nome){
      this.nome = nome;
    }

    falar() {console.log(`my name is ${this.nome}!`)};
      
}

const carro = new Carro('Saveiro');
carro.falar();


const Pessoa = nome =>{
    return{
       falar: () => console.log(`my name is ${nome}!`)
    }
}
const pessoa = Pessoa('Carlos');
pessoa.falar();