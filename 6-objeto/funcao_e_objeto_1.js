function criarData(dia, mes, ano) {
  return {
    dia: dia,
    mes: mes,
    ano: ano,
    exibir: function () {
      return `${this.dia}/${this.mes}/${this.ano}`;
    },
  };
}

const d1 = criarData(05, 01, 2023);
const d2 = criarData(08, 02, 2023);
const d3 = criarData(12, 02, 2023);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
