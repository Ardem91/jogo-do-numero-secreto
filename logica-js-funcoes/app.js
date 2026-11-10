let listaNumeros = []
let numeroMax = 10
let numS= gerarNumero();
let tentativas = 1

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2}); 
}
function msgInicial(){
    exibirTextoNaTela('h1', 'jogo do adivinha');
    exibirTextoNaTela('p', 'digite um numero como chute');
}
msgInicial()
function verificarChute(){
    let chute = document.querySelector('input').value
    console.log(chute == numS);
    if (chute == numS){
        exibirTextoNaTela('h1','ACERTOU!')
        exibirTextoNaTela('p','Voc acertou o numero secreto com '+ tentativas + ' tentativa(s)')
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute < numS){
            exibirTextoNaTela('p','o numero é maior que ' + chute)
        } else {
            exibirTextoNaTela('p','O numero é menor que ' + chute);
        }
        tentativas++;
        limparCampo()
        }
};

function gerarNumero(){
    let numeroescolhido = parseInt(Math.random() * numeroMax + 1);
    let quantidade = listaNumeros.length;
    if (quantidade == numeroMax ){
        listaNumeros = []
    }
    if (listaNumeros.includes(numeroescolhido)){
        return gerarNumero();
    } else {
        listaNumeros.push(numeroescolhido);
        console.log(listaNumeros)
        return numeroescolhido;
    }
};

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numS = gerarNumero();
    limparCampo();
    tentativas = 1
    msgInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)

}

