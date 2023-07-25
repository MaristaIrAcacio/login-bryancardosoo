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
        criaLista();
        // console.log(dadosLista);
    }
}
function criaLista(){
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    
    for(let i=0; i <= (dadosLista.length-1); i++){
        tabela += "<tr><td>" + dadosLista[i] + "<td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick=''>Excluir</button><td><tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

// FUNCAO PARA EDIÇÃO DE NOME

function Editar(i){
    document.getElementById("nomeUser").value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i-1), 1]);
}

