if (localStorage.usuario) {
    var botao = document.querySelector('#nomeusuario');
   botao.innerText = localStorage.usuario;
}else{
   alert('Não autorizado!');
} 