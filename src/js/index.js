const botaoEnviar = document.getElementById("form");
const estadoDePreenchimento = document.querySelectorAll(".estado-inicial");
const campoObrigatorio = document.querySelectorAll(".spanNone");


botaoEnviar.addEventListener("submit", function (event){
    event.preventDefault();
    

    estadoDePreenchimento.forEach((campo , index) => {

        resetarVerificacaoFormulario(campo, index);

        if (campo.value === "") {
            campo.classList.add("preenchido-não");
            
        }else {
            campo.classList.add("preenchido-sim");
            removerCampoObrigatorio(index);
            
        }
    })
})

function removerCampoObrigatorio(index) {
    campoObrigatorio[index].classList.replace("spaninline", "spanNone");
}

function resetarVerificacaoFormulario(campo, index) {
    campo.classList.remove("preenchido-não", "preenchido-sim");
    campoObrigatorio[index].classList.replace("spanNone", "spaninline");
}
