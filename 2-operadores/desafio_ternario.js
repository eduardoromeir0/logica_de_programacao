const a = 3;
const b = 7;
const operacao = "%"; // +, -, *, /

const resultado =
  operacao === "+"
    ? a + b
    : operacao === "-"
    ? a - b
    : operacao === "*"
    ? a * b
    : operacao === "/"
    ? a / b
    : operacao === "%"
    ? a % b
    : "Operação inválida";

console.log(resultado);
