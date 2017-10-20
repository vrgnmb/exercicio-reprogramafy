var botaoCadastro = document.getElementById("botaoCadastro");
var fundoCadastro = document.getElementById("fundoCadastro");
var fecharCadastro = document.getElementById("fecharCadastro");

botaoCadastro.onclick = function(){
    fundoCadastro.classList.add("visivel");
}

fecharCadastro.onclick = function(){
    fundoCadastro.classList.remove("visivel");
}

fundoCadastro.onclick = function(e){
    if (e.target == fundoCadastro){
        fundoCadastro.classList.remove("visivel");
    }
}


//CADASTRO


// seleciona o formulario 
var formCadastro = fundoCadastro.querySelector('form');
// quando for enviar mandar os dados
formCadastro.onsubmit = function(e){
    
//Seleciona os inputs
    var emailCadastro = document.querySelector("#emailCadastro");
    var senhaCadastro = document.querySelector("#senhaCadastro");


//Seleciona a modal
    var modalCadastro = document.querySelector('#modalCadastro');

    var usuarios = JSON.parse(localStorage.usuarios || "[]");

    usuarios.push({
        email: emailCadastro.value,
        senha: senhaCadastro.value,

    })


    localStorage.usuarios = JSON.stringify(usuarios);

}