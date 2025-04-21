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

// const estadoDePreenchimento = document.querySelectorAll(".estado-inicial");
// const botaoEnviar = document.querySelector(".enviar");

// const emailInput = document.querySelector("#emailId")

// botaoEnviar.addEventListener("click", (e) =>{
//     e.preventDefault()

//     estadoDePreenchimento.forEach((input)=>{
//         if (input.value) {
//             input.classList.add("preenchido-sim");
//             input.classList.remove("preenchido-nao");
//             input.nextElementSibling.classList.remove("spaninline")      
//         } else {
//             campoInvalido(input);
//         }
//     });
// });

// function campoInvalido(input) {
//     input.classList.remove("preenchido-sim");
//     input.classList.add("preenchido-nao");
//     input.nextElementSibling.textContent = "campo obrigatório"
//     input.nextElementSibling.classList.add("spaninline");
// }

/* validação para nome email e telefone */

const botaoEnviar = document.querySelector(".enviar");
const emailInput = document.querySelector("#emailId")
const nomeInput = document.querySelector("#nomeId")
const telefoneInput = document.querySelector("#telefoneId")
const textoInput = document.querySelector("#areaTexto")

botaoEnviar.addEventListener("click", (e) =>{
    e.preventDefault()

    if(!emailInput.value) {
        campoInvalido(emailInput);
        
    } else if(!validarEmail(emailInput.value)){
        campoInvalido(emailInput);
        emailInput.nextElementSibling.textContent = "E-mail inválido"
    }else{
        campoValido(emailInput);
    }


    if(!nomeInput.value) {
        campoInvalido(nomeInput);
    } else if(!validarNome(nomeInput.value)){
        campoInvalido(nomeInput);
        nomeInput.nextElementSibling.textContent = "Nome Incompleto"
    }else{
            campoValido(nomeInput);
        }
    
        
    telefoneInput.addEventListener("input", ()=> {
        let numero = telefoneInput.value.replace(/\D/g, "").substring(0, 11); // Remove tudo que não for número e limita a 11 dígitos
    let telefoneFormatado = "";

    if (numero.length <= 10) {
        telefoneFormatado = numero.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
        telefoneFormatado = numero.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }

    telefoneInput.value = telefoneFormatado;
    })


    if (!telefoneInput.value) {
        campoInvalido(telefoneInput);
    } else if(!validarTelefone(telefoneInput.value)){
        campoInvalido(telefoneInput);
        telefoneInput.nextElementSibling.textContent = "Telefone Invalido"
    } else {
        campoValido(telefoneInput);
    }

    if (!telefoneInput.value) {
        campoInvalido(telefoneInput);
    } else if(!validarTelefone(telefoneInput.value)){
        campoInvalido(telefoneInput);
        telefoneInput.nextElementSibling.textContent = "Telefone Invalido"
    } else {
        campoValido(telefoneInput);
    }

    if(!textoInput.value.trim()){
        campoInvalido(textoInput)
    } else {
        campoValido(textoInput)
    }
   
 });

function validarNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.trim().split(' ')
    return nomeComoArray.length >= 2;
}

function validarEmail(email) {
    const regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
    return regex.test(email)
}

function validarTelefone(telefone){
    const numeroLimpo = telefone.replace(/\D/g, "");
    return numeroLimpo.length === 10 || numeroLimpo.length === 11;

    }

function campoValido(input) {
    input.classList.add("preenchido-sim");
    input.classList.remove("preenchido-nao");
    input.nextElementSibling.classList.remove("spaninline");
}

function campoInvalido(input) {
    input.classList.remove("preenchido-sim");
    input.classList.add("preenchido-nao");
    input.nextElementSibling.textContent = "campo obrigatório"
    input.nextElementSibling.classList.add("spaninline");
}