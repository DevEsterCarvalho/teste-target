/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;*/

const fs = require("fs");

const dadosFaturamento = JSON.parse(
  fs.readFileSync("./dadosFaturamento.json", "utf8")
);

let maiorFaturamento = 0;
let menorFaturamento = Infinity;
let somaFaturamento = 0;
let diasComFaturamento = 0;

dadosFaturamento.forEach((dia) => {
  if (dia.valor > 0) {
    somaFaturamento += dia.valor;
    diasComFaturamento++;

    if (dia.valor > maiorFaturamento) maiorFaturamento = dia.valor;
    if (dia.valor < menorFaturamento) menorFaturamento = dia.valor;
  }
});

const mediaFaturamento = somaFaturamento / diasComFaturamento;

const diasAcimaDaMedia = dadosFaturamento.filter(
  (dia) => dia.valor > mediaFaturamento
).length;

console.log(`o maior faturamento foi: ${maiorFaturamento.toFixed(2)}`);
console.log(`o menor faturamento foi: ${menorFaturamento.toFixed(2)}`);
console.log(
  `os total de dias com faturamento acima da média mensal foram: ${diasAcimaDaMedia}`
);
