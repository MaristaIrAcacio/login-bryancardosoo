function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

    if(!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
        window.location.href = "aula2.html";
    }
}
/*FUNÇÃO PARA CRIAR A LISTA DE USUÁRIOS */
/*
--->Cria o Array para armazenar os usuários
*/
var dadosLista = [];
function salvarUser(){

    let nomeUser = document.getElementById("nomeUser").value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        // console.log(dadosLista);
    }
}
function criaLista(){
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    
}