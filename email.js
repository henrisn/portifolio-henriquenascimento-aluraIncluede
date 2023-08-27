var texto = "Obrigado por entrar em contato! Não deixe de conferir as minhas redes sociais e conhecer um pouco mais do meu trabalho!";
var atraso = 80;
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
