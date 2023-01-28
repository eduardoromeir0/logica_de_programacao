let temDinheiro = true;
let estaEnsolarado = false;
let carroNaGaragem = true;

// As condições precisam serem verdadeiras
let resultadoAnd = "#1 (AND) - Vai pro shopping? ";
resultadoAnd += temDinheiro && estaEnsolarado;
console.log(resultadoAnd);

let resultadoOr = "#2 (OR) - Vai pro shopping? ";
resultadoOr += estaEnsolarado || carroNaGaragem;
console.log(resultadoOr);

// Ou exclusivo
console.log(true != false);
console.log(true != true);

// Operador unário
console.log("Verdadeiro:", !false);
console.log("Falso:", !true);
