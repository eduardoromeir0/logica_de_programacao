// 1. Encontre o menor nota e exclui ela da média

const nota1 = 5;
const nota2 = 4;
const nota3 = 1;

// 1° Solução
function menorNotaEMedia(nota1, nota2, nota3) {
  menorNota = nota1;

  if (menorNota < nota2 && menorNota < nota3) {
    return (nota2 + nota3) / 2;
  } else if (nota2 < menorNota && nota2 < nota3) {
    menorNota = nota2;
    return (nota1 + nota3) / 2;
  } else {
    menorNota = nota3;
    return (nota1 + nota2) / 2;
  }
}

// 2° Solução

function encontreMenor(n1, n2) {
  return n1 <= n2 ? n1 : n2;
}

function calcularMedia(n1, n2, n3) {
  const menorNota = encontreMenor(n1, encontreMenor(n2, n3));

  if (menorNota === n1) {
    return (n2 + n3) / 2;
  } else if (menorNota === n2) {
    return (n1 + n3) / 2;
  } else if (menorNota === n3) {
    return (n1 + n2) / 2;
  }
}

console.log(menorNotaEMedia(nota1, nota2, nota3));
console.log(calcularMedia(nota1, nota2, nota3));
