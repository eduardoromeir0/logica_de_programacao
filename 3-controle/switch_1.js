let nota = 10;

// Math.ceil arredonda o número pra cima.
switch (Math.ceil(nota)) {
  case 10:
    console.log("Quadro de honra!");
    break;
  case 8:
    console.log("Parabéns!");
    break;
  case 7:
    console.log("Aprovado!");
    break;
  case 6:
  case 5:
  case 4:
    console.log("Recuperação!");
    break;
  case 3:
  case 2:
  case 1:
    console.log("Reprovado!");
    break;
  default:
    console.log("Nota ínvalida");
}
