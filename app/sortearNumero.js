
const maiorValor = 1000;
const menorValor = 10;
const numeroAleatorio = gerarNumero();

const elementoMenor = document.getElementById("menor-valor")
elementoMenor.innerHTML = menorValor
const elementoMaior = document.getElementById("maior-valor")
elementoMaior.innerHTML = maiorValor

function gerarNumero(){
  return parseInt(Math.random() * maiorValor + 1); 
}
