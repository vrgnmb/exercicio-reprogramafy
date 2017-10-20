var botao = document.getElementById("botao");
var fundo = document.getElementById("fundo");
var fechar = document.getElementById("botaofechar");


botao.onclick = function () {
    fundo.classList.add("visivel");
    console.log("cliquei");
}

fechar.onclick = function () {
    fundo.classList.remove("visivel");
}

fundo.onclick = function (e) {
    if (e.target == fundo) {
        fundo.classList.remove("visivel");
    }
}

//Seleciona o formulario
var form = document.querySelector('form');
//Quando for enviar mandar os dados
form.onsubmit = function (e) {
    // Seleciona os inputs
    var email = document.querySelector('#email');
    var password = document.querySelector('#password');

    //Seleciona a modal 
    var modal = document.querySelector('#modal');

    //Verifica se o email e senha são permitidos
    var usuarios = JSON.parse(localStorage.usuarios);
    var correto;
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email.value && usuarios[i].senha === password.value) {
            correto = true;
            localStorage.usuario = usuarios[i].email;
            break;
        }
    }

    if (!correto) {
        //adiciona classe de erro no modal pra mostrar um feedback
        modal.classList.add('erro');

        //remove a classe com erro depois de fazer a animação
        setTimeout(function () {
            modal.classList.remove('erro');
        }, 1000);

        //Não deixa o usuário enviar o formulário
        return false;
    }
}

