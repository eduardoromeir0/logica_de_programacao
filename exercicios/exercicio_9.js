/* 
    Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
    que o segundo será o número de vezes que haverá repetição. Um array será retornado
*/

function repetir(param1, param2) {
  let array = [];
  let contador = 0;

  while (contador <= param1) {
    array.push(param2);
    contador++;
  }
  return array;
}

console.log(repetir(10, "Olá!"));
