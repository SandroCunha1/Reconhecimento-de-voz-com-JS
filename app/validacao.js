function validaChute(){
    const numero = +chute

    if(Number.isNaN(numero)){
        elementoChute.innerHTML += "<div class='erro'>Valor Inválido! </br> Não é um número</div>"
        return
    }
    else if(numeroMaiorOuMenorQueOPermitido(numero)){
        elementoChute.innerHTML += `<div class='erro'>Valor Inválido!</br> O número deve ser entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    else if(numero === numeroAleatorio){
        document.body.innerHTML = `
        <h1 class='acerto'>Parabéns você acertou!</h1>
        <h3>O número secreto era <span class='box smaller'>${numeroAleatorio}</span></h3>
        <button id='resetar-jogo' class='jogar-novamente'>Jogar Novamente </button>
        `
    }
    else if(numero > numeroAleatorio){
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div> `
    }
    else if(numero < numeroAleatorio){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div> `
    }
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'resetar-jogo'){
        window.location.reload();
    }
})

function numeroMaiorOuMenorQueOPermitido(numero){
    return numero > maiorValor || numero < menorValor
}