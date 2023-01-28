function retornarUmFuncao() {
  return function () {
    return function () {
      return "Boa noite!";
    };
  };
}

console.log(retornarUmFuncao);
console.log(retornarUmFuncao()());
console.log(retornarUmFuncao()()());

const saudacao = retornarUmFuncao();
console.log(saudacao()());
