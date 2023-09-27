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