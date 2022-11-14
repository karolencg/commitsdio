// Crie uma função que imprima o seu nome e outra que verifique se você é maior ou menor de idade. 


function myName(nome) {
    console.log('Meu nome é:' + nome);
}

myName('karolen');

function verificarIdade(idade) {
    if ( idade <18 ){
        console.log('Menor de idade');
    } else {
        console.log('Maior de idade');
    }
}

verificarIdade(23);
