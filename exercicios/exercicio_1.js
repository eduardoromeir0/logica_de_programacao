/*
    Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação "!" no final
*/

function saudacao(param) {
  return `Olá, ${param}, seja bem vindo`.concat("!");
}

console.log(saudacao("Eduardo"));
