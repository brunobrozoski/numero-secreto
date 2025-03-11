let listaNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto =  gerarNumeroAleatorio();
let tentativas = 1;
let chute;
console.log(numeroSecreto);
exibirMensagenInicial()
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdDeElementosNaLista = listaNumeroSorteado.length;

    if (qtdDeElementosNaLista == numeroLimite){
        listaNumeroSorteado = []
    }

    if (listaNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else {
        listaNumeroSorteado.push(numeroEscolhido);
        return numeroEscolhido;
    }
 }

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagenInicial(){
    exibirTextoNaTela('h1', 'Jogo Do Numero Secreto');
    exibirTextoNaTela('p', 'Digite um numero entre 1 e 10');
}
function verificarChute() {
    let chute = document.querySelector('input').value;

        if (chute  == numeroSecreto) {
            exibirTextoNaTela('h1', 'ACERTOU!');
            let palavraTentativa = tentativas > 1 ? 'TENTATIVAS!' : 'TENTATIVA!';
            let mensagemTentativas =  `VOCE DESCOBRIU O NUMERO SECRETO ${numeroSecreto} COM ${tentativas} ${palavraTentativa}`;
            exibirTextoNaTela('p', mensagemTentativas);
            limparCampo();
            document.getElementById('reiniciar').removeAttribute('disabled');

        } else {
            if (chute > numeroSecreto) {
                exibirTextoNaTela('p', `O número secreto é <span style="color: #ff3030; font-weight: bold;">MENOR</span> que ${chute}`);
            } else { 
                exibirTextoNaTela('p', `O número secreto é <span style="color: #00ff00; font-weight: bold;">MAIOR</span> que ${chute}`);
            }
            tentativas++;
            limparCampo();
         }
        
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
    exibirMensagenInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}


