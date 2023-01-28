// Data (dia, mes, ano)
// Método: exibir(dia/mes/ano)

const data = {
  dia: 28,
  mes: 01,
  ano: 2023,
  exibir: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};

console.log(data);
console.log(data.exibir());
