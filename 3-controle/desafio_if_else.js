const a = 10;
const b = 28;
const operacao = '*';
let resultado = 0;

if (operacao === '+') {
  resultado = a + b;
} else if (operacao === '-') {
  resultado = a - b;
} else if (operacao === '*') {
  resultado = a * b;
} else if (operacao === '/') {
  resultado = a / b;
} else {
  console.log("Operação inválida!");
}

console.log('Resultado:', resultado);
