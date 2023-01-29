/*
Crie uma função que receba três números como parâmetro (numero, minimo, maximo) e também um parâmetro booleano (inclusivo)
e retorne se o parâmetro numero (o primeiro parâmetro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não seja
informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a
maximo. 
*/

function naoEntendi(numero, minimo, maximo, booleano = false) {
  if (booleano === true) {
    entreNumeros = numero >= minimo && numero <= maximo;
    return "Entre";
  } else {
    return "Inclusivo";
  }
}

console.log(naoEntendi(10, 5, 20, false));
