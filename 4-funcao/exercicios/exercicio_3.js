// Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C).

function conversaoFahrenheit(f) {
  const celsius = ((f - 32) / 9) * 5;
  return celsius;
}

console.log(`Fahrenheit para Celsius ${conversaoFahrenheit(100)}`);
