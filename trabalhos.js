var texto = "Trabalhos";
var atraso = 200;
var textoElemento = document.querySelector(".titulo-principal");


var contadorDeLetras = 0;
function escreverTexto() {
  if (contadorDeLetras < texto.length) {
    textoElemento.textContent += texto.charAt(contadorDeLetras);
    contadorDeLetras++;
    setTimeout(escreverTexto, atraso);
  }
}

escreverTexto();

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".cabecalho_menu_icone");
    const cabecalho = document.querySelector(".cabecalho");
  
    menuIcon.addEventListener("click", function () {
        cabecalho.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const imagens = [
        "./assets/IMG_0730.jpg",
        "./assets/IMG_0764.jpg",
        "./assets/IMG_0806.jpg",
        "./assets/IMG_1579.jpg",
        "./assets/IMG_0751.jpg",
        "./assets/IMG_2613.jpg",
        "./assets/IMG_1964.jpg",
        "./assets/IMG_3175.jpg",
        "./assets/IMG_3746.jpg", 
        "./assets/IMG_4118.jpg",
        "./assets/IMG_4119.jpg",
        "./assets/IMG_4468.jpg",
        "./assets/IMG_8956.jpg",
        "./assets/IMG_0787.jpg",
        "./assets/IMG_1922.jpg",
        "./assets/IMG_2944.jpg",
        "./assets/IMG_9479.jpg",
    ];
    let indiceAtual = 0;

    const imagemAtual = document.getElementById("imagemAtual");
    const botaoAnterior = document.getElementById("anterior");
    const botaoProximo = document.getElementById("proximo");

    function exibirImagem() {
        imagemAtual.src = imagens[indiceAtual];
        imagemAtual.alt = `Trabalho ${indiceAtual + 1}`;
    }

    exibirImagem();

    botaoAnterior.addEventListener("click", function () {
        indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
        exibirImagem();
    });

    botaoProximo.addEventListener("click", function () {
        indiceAtual = (indiceAtual + 1) % imagens.length;
        exibirImagem();
    });
});