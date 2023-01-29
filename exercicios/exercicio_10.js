/*
    Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro.
*/

function repetindo(param1, param2) {
  let s = " ";
  let sinal = "+";
  for (let count = 0; count <= param1; count++) {
    s += sinal + "";
  }
  return s;
}

console.log(repetindo(5));
console.log(repetindo(10));
