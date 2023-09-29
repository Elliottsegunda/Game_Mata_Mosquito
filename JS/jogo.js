// pegar a largura e a altura da tela

var largura = 0;
var altura = 0;
var vidas = 1;
var tempo = 15;
var criaMosquitoTempo = 1500;
var nivel = window.location.search;
nivel = nivel.replace('?','');

    if(nivel === 'normal'){
        criaMosquitoTempo = 1500;
    }
    else if(nivel === 'dificil'){
        criaMosquitoTempo = 1000;
    }
    else if(nivel === 'impossivel'){
        criaMosquitoTempo = 750;

    }

function ajustaTamanhoTela(){
    largura = window.innerWidth;
    altura = window.innerHeight;

    console.log(largura, altura);

    // apesar de já definida, só vai redimencionar atraves do evento onresize
}
ajustaTamanhoTela();

    var cronometro = setInterval(function(){
        tempo -= 1;
        if(tempo <= 0){
            clearInterval(cronometro);
            clearInterval(criaMosquito);
            window.location.href = 'vitory.html';
        }
        document.getElementById('cronometro').innerHTML = tempo;
    },1000)

function posicaoRandomica(){
// remover o mosquito anterior (caso exista)
if(document.getElementById('mosquito') ){
    document.getElementById('mosquito').remove();

    //perda de vida caso o mosquito desapareça sem ser clicado
    if(vidas > 3){
      window.location.href = 'game_over.html';
    }
    else{
        document.getElementById('V'+vidas).src = 'imagens/coracao_vazio.png';
        vidas++;
    }
}


var posicaoX = Math.floor(Math.random() * largura) - 90; // ajustar os valores randomicos no intervalo da largura! estamos ubtraindo 90 pq a rolagem ainda acontece pq a imagem vale 50px
var posicaoY = Math.floor(Math.random() * altura) - 90; // ajustar os valores randomicos no intervalo da altura
//console.log(posicaoX, posicaoY);

  posicaoX = posicaoX < 0 ? 0 : posicaoX; // operador ternario para controlar a posição
  posicaoY = posicaoY < 0 ? 0 : posicaoY; // operador ternario para controlar a posição
  console.log(posicaoX, posicaoY);

//criar o html
var mosquito = document.createElement('img');
mosquito.src = 'imagens/mosquito.png';
mosquito.className = tamanhoAleatorio()+' '+ladoAleatorio(); // atribuindo a classe css
//atribuir aos elementos os valores randomicos
mosquito.style.left = posicaoX+'px';
mosquito.style.top = posicaoY+'px';
mosquito.style.position = 'absolute';
mosquito.id = 'mosquito';
mosquito.onclick = function(){
    this.remove();// nosso evento está associado ao elemento, por isso usamos o this.
}
document.body.appendChild(mosquito);// atribuindo o filho(imagem) no elemento pai(body)


}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3); // classes aleatorias para alternar o tamanho do mosquito

    switch(classe){
        case 0:
            return 'mosquito1';
        
        case 1:
            return 'mosquito2';
            
        case 2:
            return 'mosquito3';
    }

}
 function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2); // classes aleatorias para alternar o tamanho do mosquito

    switch(classe){
        case 0:
            return 'ladoA';
        
        case 1:
            return 'ladoB';
    }

 }