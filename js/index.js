var nome = "Thalis Dhomini Wisniewski";
var nomeHtml = document.getElementById("nome-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarNomeNoHtml(nome) {
    nomeHtml.innerHTML = none;
}

function LogarNome() {
    console.log(nome);
}

function clickNoProjetos() {
    console.log("clicou no botão projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";

}

function clickNoSobre() {
    console.log("clicou no botão Sobre");
    texto1.style.display = "block";
    texto2.style.display = "none";
}

colocarNomeNoHtml(nome);