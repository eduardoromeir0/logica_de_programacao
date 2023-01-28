//               0  1  2  3  4  5  6
const numeros = [1, 2, 3, 4, 5, 6, 7];

for (let contador = 0; contador < numeros.length; contador++) {
  console.log(`Índice[${contador}] : ${numeros[contador]}`);
}

console.log("------------------------");

for (let contador = 0; contador < numeros.length; contador += 2) {
  console.log(`Índice[${contador}] : ${numeros[contador]}`);
}
