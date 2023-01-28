function retornar() {
  function saudacao() {
    return "Bom dia!";
  }

  return saudacao;
}

console.log(retornar);
console.log(retornar());
console.log(retornar()());

const umaFuncao = retornar();
console.log(umaFuncao());
