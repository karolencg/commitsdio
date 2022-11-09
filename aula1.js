/* Faça um programa para calcular o valor de uma viagem 

Você tera 3 variaveis. Sendo elas:
1 - Preço do combustível 5.79;
2 - Gasto médio do combustível do carro por Km = 10;
3 - Distância em Km da viagem =100;
*/

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaKm = 100; 

const litrosConsumidos = distanciaKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto);
console.log(litrosConsumidos)
