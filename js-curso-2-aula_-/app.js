let numeroSecretoo = numeroSecreto();
let tentativas = 1;

//Texto 
function exibirNoCampo(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = (texto);
}
function mensagemInicial(){
    exibirNoCampo('h1', 'Jogo do número secreto');
    exibirNoCampo('p', 'Escolha um número entre 1 e 10');
}

mensagemInicial(); 

//Gerador do número secreto
function numeroSecreto() {
    return parseInt(Math.random() * 10 + 1);
}

//Chute
function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecretoo){
        let palavra = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Parabéns! Você descobriu o número secreto com ${tentativas} ${palavra}`;
        exibirNoCampo('h1', 'Acertou!');
        exibirNoCampo('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
    } else {
        if (chute > numeroSecretoo){
            exibirNoCampo('p', 'O número é menor');
        }
        else{
            exibirNoCampo('p', 'O número é maior');
        }
        limparChute();
        tentativas++;
    }
}

//Limpar chute
function limparChute(){
    chute = document.querySelector('input');
    chute.value = '';
}

//Reiniciar jogo
function novoJogo(){
    numeroSecretoo = numeroSecreto();
    mensagemInicial();
    tentativas = 1;
    limparChute();
    document.getElementById('reiniciar').setAttribute('disabled, true');
}