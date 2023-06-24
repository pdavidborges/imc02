
//var nome = 'David';
//alert(typeof nome);

//Selecionar elementos do HTML
//var altura = document.getElementById('altura');

var altura = document.querySelector('#altura');
var peso = document.querySelector('#peso');
var resultImc = document.querySelector('#result-imc');

//console.log(altura);
//console.log(peso);

function calcularImc() {
    //alert('Função acionada!');

    if(altura.value != '' && peso.value != ''){
        
        var imc = peso.value / (altura.value*altura.value);
        console.log(imc.toFixed(2));

        resultImc.style.display = 'block'; //exibe a caixa de resultado
        resultImc.innerHTML = '<h2>Seu IMC: '+imc.toFixed(2)+'</h2>';

        /*Menor que 18.5	Magreza
        Entre 18.5 e 24.9	Normal
        Entre 25.0 e 29.9	Sobrepeso
        Maior que 29.9	Obesidade*/

        if(imc < 18.5){
            resultImc.style.background = '#ff0000';
        }

        else if(imc <= 24.9){
            resultImc.style.background = '#005F09';
        }

        else if(imc <= 29.9){
            resultImc.style.background = '#FFAA05';
        }

        else{
            resultImc.style.background = '#A30A00';
        }

    }
    
    else{
        alert('Preencha todos os campos!');
    }    

}