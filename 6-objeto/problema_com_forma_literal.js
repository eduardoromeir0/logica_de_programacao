const d1 = {
  dia: 28,
  mes: 01,
  ano: 2023,
  exibir: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};

const d2 = {
  dia: 08,
  mes: 02,
  ano: 2023,
  exibir: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};

const d3 = {
  dia: 12,
  mes: 02,
  ano: 2023,
  exibir: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
