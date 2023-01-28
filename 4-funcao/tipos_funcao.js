// #1 Função COM parametro e COM retorno

function soma(a, b) {
  return a + b;
}

// Imprimindo o retorno
console.log(soma(10, -5));

// #2 Função COM parametro e SEM retorno

function subtracao(a, b) {
  console.log(`Resultado: ${a - b}`);
}

subtracao(10, 9);

// #3 Função SEM parametro e SEM retorno

function dataAtual() {
  console.log(new Date());
}

dataAtual();
