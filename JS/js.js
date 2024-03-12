var dia = new Date();
var hora = dia.getHours();



function desFoto() {
    var descFoto = document.getElementById("desc_foto");

    if (descFoto.style.display === "none") {
        descFoto.style.display = "block"
    } else {
        descFoto.style.display = "none"
    }


}