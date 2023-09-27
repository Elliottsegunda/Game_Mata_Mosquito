// pegar a largura e a altura da tela

var largura = 0;
var altura = 0;

function ajustaTamanhoTela(){
    largura = window.innerWidth;
    altura = window.innerHeight;

    console.log(altura, largura);

    // apesar de já definida, só vai redimencionar atraves do evento onresize
}
ajustaTamanhoTela();

var posicaoX = Math.floor(Math.random() * largura); // ajustar os valores randomicos no intervalo da largura
var posicaoY = Math.floor(Math.random() * altura); // ajustar os valores randomicos no intervalo da altura
console.log(posicaoX, posicaoY);

//criar o html
var mosquito = document.createElement('img');
mosquito.src = 'imagens/mosquito.png';
mosquito.className = 'mosquito1'; // atribuindo a classe css
//atribuir aos elementos os valores randomicos
mosquito.style.left = posicaoX+'px';
mosquito.style.left = posicaoX+'px';
mosquito.style.position = 'absolute';
document.body.appendChild(mosquito)// atribuindo o filho(imagem) no elemento pai(body)