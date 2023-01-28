const notas = [7, 8, 3, 5, 10, 9, 8, 8];

// foreach

let valores = " ";

for (let nota of notas) {
  valores += nota + " ";
}

let indices = " ";

for (let indice in notas) {
  indices += notas + " ";
}
console.log("-------------------------");

console.log(indices);
