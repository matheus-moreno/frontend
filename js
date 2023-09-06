// Função para alternar a visibilidade das informações de contato
function toggleContatoInfo() {
    var contatoInfo = document.getElementById("contatoInfo");
    if (contatoInfo.style.display === "none") {
        contatoInfo.style.display = "block";
    } else {
        contatoInfo.style.display = "none";
    }
}

// Adiciona um evento de clique ao link "Contato"
var contatoLink = document.getElementById("contatoLink");
if (contatoLink) {
    contatoLink.addEventListener("click", toggleContatoInfo);
}
