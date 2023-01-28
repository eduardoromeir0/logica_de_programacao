let x = 3;
let y = [1, 2, 3];
console.log(y[0]);

console.log(Array.isArray(y));

// Definindo objeto

// chave : valor
const produto = {
  nome: "Caneta",
  preco: 9.99,
  desconto: 20 / 100,
};
console.log(produto);
console.log(produto["nome"]); // #1 Acessando o atributo nome
console.log();
console.log("***************************");
console.log("Nome:", produto.nome); //  #2 Acessando o atributo nome
console.log("Preço:", produto.preco);
console.log("Desconto:", produto.desconto);
console.log("***************************");
