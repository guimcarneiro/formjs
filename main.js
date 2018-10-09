var nomeElement = document.querySelector("#nome");
var sobrenomeElement = document.querySelector("#sobrenome");
var emailElement = document.querySelector("#email");
var nascElement = document.querySelector("#nasc");
var sexoElement = document.getElementsByName("sexo");
var corElement = document.getElementsByName("cor");
var mensagemElement = document.querySelector("#mensagem");
var submitBtnElement = document.querySelector("#submitBtn");
var listaElement = document.querySelector("#lista");


var guardaUsuarios = [];

function listUsuarios(){

    for(usuario of guardaUsuarios){
        var usuarioElement = document.createElement("li");
        //var textUsuario = document.createTextNode("Nome: " + usuario.nome + ' || ' +"Sobrenome: " + usuario.sobrenome + ' || ' +"E-mail: "+ usuario.email);

        usuarioElement.innerHTML ="Nome: " + usuario.nome + "<br>"
                                +"Sobrenome: " + usuario.sobrenome + "<br>"
                                + "E-mail: " + usuario.email + "<br>"
                                + "Data de Nascimento: " + usuario.nasc + "<br>"
                                + "Sexo: " + usuario.sexo + "<br>"
                                + "Cor: " + usuario.cor + "<br>"
                                + "<br>Mensagem: <br>  " + usuario.mensagem;

        //usuarioElement.appendChild(textUsuario);
        listaElement.appendChild(usuarioElement);
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

    listUsuarios();
}
submitBtnElement.onclick=addUsuario;