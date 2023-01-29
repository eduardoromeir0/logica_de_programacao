/*
Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro 
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".
*/

function entradaConversao(entrada) {
  if (typeof entrada === "boolean") {
    return !entrada;
  } else if (typeof entrada === "number") {
    return entrada * -1;
  } else {
    return `Booleano ou número esperados mas o parametro é ${typeof entrada}`;
  }
}

console.log(entradaConversao(10));
console.log(entradaConversao(-2));
console.log(entradaConversao(true));
console.log(entradaConversao(false));
console.log(entradaConversao("olá"));
