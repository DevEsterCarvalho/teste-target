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

const diasFaturamento = dadosFaturamento.filter((dias) => dias.valor > 0);

const maiorFaturamento = Math.max(...diasFaturamento.map((dias) => dias.valor));
const menorFaturamento = Math.min(...diasFaturamento.map((dias) => dias.valor));

const somaDoFaturamento = diasFaturamento.reduce(
  (acumulador, dias) => acumulador + dias.valor,
  0
);
const media = somaDoFaturamento / diasFaturamento.length;
const diasAcimaDaMedia = diasFaturamento.filter(
  (dias) => dias.valor > media
).length;

console.log(`o maior faturamento foi: ${maiorFaturamento.toFixed(2)}`);
console.log(`o menor faturamento foi: ${menorFaturamento.toFixed(2)}`);
console.log(
  `os total de dias com faturamento acima da média mensal foram: ${diasAcimaDaMedia}`
);
