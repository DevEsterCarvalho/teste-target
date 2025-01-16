/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

function sequenciaFibonacci(numero) {
  if (numero < 0) return false;

  let a = 0,
    b = 1,
    proximo;
  while (a <= numero) {
    if (a === numero) return true;
    proximo = a + b;
    a = b;
    b = proximo;
  }
  return false;
}

const pertenceASequencia = [4, 5];

pertenceASequencia.forEach((numero) => {
  if (sequenciaFibonacci(numero)) {
    console.log(`o número ${numero} faz parte da sequencia de fibonacci`);
  } else {
    console.log(`o número ${numero} não faz parte da sequencia de fibonacci`);
  }
});
