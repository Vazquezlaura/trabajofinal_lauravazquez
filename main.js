var confirmacion = window.confirm("¿Estas listo para conocer el mundo de la Astronomia?")

if (confirmacion == true) {
    alert("♥ SIENTESE, DISFRUTE Y CONOZCA LAS ESTRELLAS ♥");
}
else {
    alert("Entonces si me aprueba 🥹🥹🥹")
}
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0)
})