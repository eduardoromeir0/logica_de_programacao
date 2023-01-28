function executar(fn) {
  if (typeof fn === "function") {
    console.log(fn());
  }
}

console.log(typeof executar === "function");

function saudacao() {
  return "Olá, tudo bem?";
}

executar(saudacao);

const x = saudacao;
const y = saudacao();

console.log(x());
console.log(y);
