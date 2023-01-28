function Data(dia = 01, mes = 01, ano = 2023) {
  this.dia = dia;
  this.mes = mes;
  this.ano = ano;
  this.exibir = function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  };
}

const date = new Data(05, 01, 2023);
console.log(date.exibir());
