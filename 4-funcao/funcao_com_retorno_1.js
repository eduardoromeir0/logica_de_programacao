function sempreRetornaAlgo() {
  console.log("Retornando algo....");
  return 1;
}

let invocandoFuncao = sempreRetornaAlgo();

console.log(invocandoFuncao);
console.log(invocandoFuncao + 100);

function textoOuNumero(retornaAlgumTipo) {
  return retornaAlgumTipo ? "String" : 123;
  /*
        if (retornaAlgumTipo) {
        return "String";
    } else {
        return 123;
    }
  */
}

let retornaAlgumTipo = textoOuNumero(true);

console.log(retornaAlgumTipo);
console.log(textoOuNumero(false));
