var nomeElement = document.querySelector("#nome");
var sobrenomeElement = document.querySelector("#sobrenome");
var emailElement = document.querySelector("#email");
var nascElement = document.querySelector("#nasc");
var sexoElement = document.getElementsByName("sexo");
var corElement = document.getElementsByName("cor");
var mensagemElement = document.querySelector("#mensagem");
var submitBtnElement = document.querySelector("#submitBtn");
var listaElement = document.querySelector("#lista");


var guardaUsuarios = JSON.parse(localStorage.getItem("lista_usuarios")) || [];

function listUsuarios(){

    for(usuario of guardaUsuarios){
        var usuarioElement = document.createElement("li");
        var excluirElement = document.createElement("button");
        
        var pos = guardaUsuarios.indexOf(usuario);
        var textExcluir = document.createTextNode("Excluir");
        excluirElement.setAttribute("onclick", "deleteUsuario( " + pos + ")");

        usuarioElement.innerHTML ="Nome: " + usuario.nome + "<br>"
                                +"Sobrenome: " + usuario.sobrenome + "<br>"
                                + "E-mail: " + usuario.email + "<br>"
                                + "Data de Nascimento: " + usuario.nasc + "<br>"
                                + "Sexo: " + usuario.sexo + "<br>"
                                + "Cor: " + usuario.cor + "<br>"
                                + "<br>Mensagem: <br>  " + usuario.mensagem;

        excluirElement.appendChild(textExcluir);

        listaElement.appendChild(usuarioElement);
        listaElement.appendChild(excluirElement);
    };

}

listUsuarios();

function getRadioValue(name){
    var nameElements = document.getElementsByName(name);

    var i;
    for(i = 0; i<nameElements.length; i++){
        if (nameElements[i].checked){
            return nameElements[i].value;
        }
    }
    return '';
}

function addUsuario(){
    listaElement.innerHTML = '';

    var corValido = getRadioValue("cor");
    var sexoValido = getRadioValue("sexo");


    var usuario = {
        nome: nomeElement.value,
        sobrenome: sobrenomeElement.value,
        email: emailElement.value,
        nasc : nascElement.value,
        sexo: sexoValido,
        cor: corValido,
        mensagem: mensagemElement.value
    };

    guardaUsuarios.push(usuario);

    nomeElement.value='';
    sobrenomeElement.value='';
    emailElement.value='';
    nascElement.value='';
    sexoElement.value='';
    corElement.value='';
    mensagemElement.value='';

    saveToStorage();
    listUsuarios();
}

function deleteUsuario(pos){
    guardaUsuarios.splice(pos, 1);
    listaElement.innerHTML = '';
    saveToStorage();
    listUsuarios();
}

function saveToStorage(){
    localStorage.setItem("lista_usuarios", JSON.stringify(guardaUsuarios))
}
submitBtnElement.onclick=addUsuario;