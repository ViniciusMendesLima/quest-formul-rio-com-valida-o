// primeira versão

// const botaoEnviar = document.getElementById("form");
// const estadoDePreenchimento = document.querySelectorAll(".estado-inicial");
// const campoObrigatorio = document.querySelectorAll(".spanNone");


// botaoEnviar.addEventListener("submit", function (event){
//     event.preventDefault();
    

//     estadoDePreenchimento.forEach((campo , index) => {

//         resetarVerificacaoFormulario(campo, index);

//         if (campo.value === "") {
//             campo.classList.add("preenchido-nao");
            
//         }else {
//             campo.classList.add("preenchido-sim");
//             removerCampoObrigatorio(index);
            
//         }
//     })
// })

// function removerCampoObrigatorio(index) {
//     campoObrigatorio[index].classList.replace("spaninline", "spanNone");
// }

// function resetarVerificacaoFormulario(campo, index) {
//     campo.classList.remove("preenchido-nao", "preenchido-sim");
//     campoObrigatorio[index].classList.replace("spanNone", "spaninline");
// }

/* Codigo refatorado apos correção */

const estadoDePreenchimento = document.querySelectorAll(".estado-inicial");
const botaoEnviar = document.querySelector(".enviar");

const emailInput = document.querySelector("#emailId")

botaoEnviar.addEventListener("click", (e) =>{
    e.preventDefault()

    estadoDePreenchimento.forEach((input)=>{
        if (input.value) {
            input.classList.add("preenchido-sim");
            input.classList.remove("preenchido-nao");
            input.nextElementSibling.classList.remove("spaninline")

            const email = emailInput.value;

            const eValido = validarEmail(email)

            if (!eValido) {
                campoInvalido(input);
                
                input.nextElementSibling.textContent = "E-mail inválido"
            }
            
        } else {
            campoInvalido(input);
        }
    });

    
});


const validarEmail = (email) => {
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
    return regex.test(email)
}
function campoInvalido(input) {
    input.classList.remove("preenchido-sim");
    input.classList.add("preenchido-nao");
    input.nextElementSibling.textContent = "campo obrigatório"
    input.nextElementSibling.classList.add("spaninline");
}

