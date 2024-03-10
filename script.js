const textarea = document.querySelector(".text-area");
const mensajes = document.querySelector(".mensaje");
const copy = document.querySelector(".copiar");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnDesencriptar() {
    //console.log("Hola")
    let mensaje = desencriptar(mensajes.value);
    textarea.value = mensaje;   
}

function btnEncriptar() {
    //console.log("Hola")
    let mensaje = encriptar(mensajes.value);
    mensajes.value = mensaje;
    mensajes.style.backgroundImage = 

}



function desencriptar() { // desencripta
    let cifras = mensajes.value
    .replaceAll(/ufat/g, "u")
    .replaceAll(/ober/g, "o")
    .replaceAll(/ai/g, "a")
    .replaceAll(/imes/g, "i")
    .replaceAll(/enter/g, "e");
    mensajes.value = "";
    return cifras
}

function encriptar() {
    let cifras = textarea.value
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    textarea.value = "";
    return cifras
}