function multiplicacao(n1, n2) {
  let soma = 0;

  for (let contador = 0; contador < n1; contador++) {
    soma = soma + n2;
  }

  return soma;
}

console.log(multiplicacao(5, 5));
