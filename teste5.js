//5) Escreva um programa que inverta os caracteres de um string.
let exemploString = "Lógica de Programação";
function inverter(s) {
  let invertida = "";

  for (let i = s.length - 1; i >= 0; i--) {
    invertida += s[i];
  }
  return invertida;
}

let resultado = inverter(exemploString);
console.log(resultado);
