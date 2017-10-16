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


