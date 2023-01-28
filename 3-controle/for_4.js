/*
    [1, 1], [1, 2], [1, 3]
    [2, 1], [2, 2], [2, 3]
    [3, 1], [3, 2], [3, 3]
*/

for (linha = 1; linha <= 4; linha++) {
  let exibir = "";
  for (coluna = 1; coluna <= 4; coluna++) {
    exibir += `[${linha}, ${coluna}]`;
  }
  console.log(exibir);
}
