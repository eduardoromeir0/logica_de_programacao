const produto = {
  nome: "Macbook PRO",
  preco: 9500,
  desconto: 0.15,
  precoComDesconto: function () {
    return this.preco * (1 - this.desconto);
  },
};

console.log(produto.nome);
console.log(produto.preco);
console.log(produto.precoComDesconto());
