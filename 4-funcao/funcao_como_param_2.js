function executar(fn, a = 0, b = 0) {
  if (typeof fn === "function") {
    console.log(fn(a, b));
  }
}

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

console.log(executar(somar));
executar(somar, 10, 20);
executar(subtrair, 5, 10);
executar(multiplicar, 5, 10);
executar(dividir, 50, 10);
executar(dividir);
