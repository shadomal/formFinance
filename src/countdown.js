'use strict'
const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    if(stop){
        return;
    }
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
}

const contagemRegressiva = (tempo) => {
    const pararContagem = () => clearInterval(id);

    const contar = () => {
        if (tempo === 0) {
            pararContagem();
        }
        atualizar(tempo);
        tempo--;
    }
    const id = setInterval(contar, 1000);
}
let count = 43200;
let stop = false;
function stopCount(){
    stop = true;
}
function recuseText() {
    document.getElementById("pendente_text").innerHTML = "Aprovação Recusada"
    document.getElementById("proposta_final").innerHTML = "Resultado Final: PROPOSTA RECUSADA";
    document.getElementById("form_").style.background = "red";
    stopCount();
}
function sucessText() {
    document.getElementById("pendente_text").innerHTML = "Aprovação Realizada com Sucesso!";
    document.getElementById("proposta_final").innerHTML = "Resultado Final: PROPOSTA EFETIVADA";
    document.getElementById("form_").style.background = "green";
    stopCount();
}


contagemRegressiva(count);