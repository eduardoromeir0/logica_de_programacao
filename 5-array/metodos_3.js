const numeros = [1, 2, 3, 4, 5, 6];

let string = " ";

for (let i = 0; i < numeros.length; i++) {
  string += numeros[i] + ", ";
}

console.log(string);

numeros.forEach(function (elemento) {
  console.log(elemento * 2);
});
