const numeros = [1, 2, 3, 4, 4, 5];

numeros.push(6); // Adiciona um elemento no fim do array
numeros[0] = 11; // Altera o valor do índice

console.log("Array:", numeros);
console.log("Array:", numeros.join(","));
const novoArray = numeros.concat(7, 8, 9);
console.log("Array:", novoArray); // Concatena com qualquer valor
console.log("Array:", novoArray.includes(10)); // Verifica se o elemento está dentro do array.
console.log("Array:", numeros.indexOf(4)); // Retorna o índice do elemento encontrado no array.
console.log("Array:", numeros.indexOf(4, 1));
