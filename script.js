var botao = document.getElementById("botao");
var modal = document.getElementById("modal");
var fundo = document.getElementById("fundo");
var fechar = document.getElementById("fechar");


botao.onclick = function(){
    fundo.classList.add("visivel");
    modal.classList.add("visivel");
}

botaofechar.onclick = function(){
    fundo.classList.remove("visivel");
}

fundo.onclick = function(e){
    if (e.target == fundo){
    fundo.classList.remove("visivel");
}
}


//login
var email = document.querySelector("input[type='email'] ");
var password = document.getElementById("password")
var formulario = document.querySelector("form");
formulario.onsubmit = function(){
    if(email.value !== "admin@admin.com" || password.value !== "admin"){    
    alert("Email errado");
    modal.classList.add("erro");
    setTimeout(function(){
        modal.classList.remove('erro');
    }, 1000);
    return false;
    }
    localStorage.usuario = email.value;
}



console.log(email);

