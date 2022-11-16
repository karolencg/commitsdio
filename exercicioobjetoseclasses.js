/*
    1. Crie uma classe para representar carros. 
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
    Crie um método que dado a quantidade de km e o preço do combustível, nos dê o valor
    gasto em reais para realizar esse percurso. 
*/

class Carro {
    marca;
    cor;
    combustivelKm;

        constructor(marca, cor, combustivelKm) {
            this.marca = marca;
            this.cor = cor;
            this.combustivelKm = combustivelKm;
        }
    
        calcularGastoViagem(distanciaKm, precoCombustivel) {
            return distanciaKm * this.combustivelKm * precoCombustivel;
        }

}

const uno = new Carro('fiat', 'vermelho', 1 / 12);
console.log(uno.calcularGastoViagem (70, 5));

const palio = new Carro ('fiat', 'preto', 1 / 10);
console.log(palio.calcularGastoViagem(70, 5));

