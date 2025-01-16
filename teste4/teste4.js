/*4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual 
de representação que cada estado teve dentro do valor total mensal da distribuidora.  */

const fs = require("fs");

const faturamentoMensalPorEstados = JSON.parse(
  fs.readFileSync("./faturamentoMensalPorEstados.json", "utf8")
);

const faturamentoTotal = faturamentoMensalPorEstados.reduce(
  (acumulador, estado) => acumulador + estado.valor,
  0
);

faturamentoMensalPorEstados.forEach((estado) => {
  const porcentagem = (estado.valor / faturamentoTotal) * 100;
  console.log(
    `o estado ${estado.estado} representa ${porcentagem.toFixed(
      2
    )} % do faturamento total mensal da distribuidora`
  );
});
