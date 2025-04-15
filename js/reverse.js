console.log("JS Reverse foi ativada!")

// variáveis globais
let opt1 = document.getElementById("output-1");

let quebra = "<br/>";
let quebra2 = "<br/><br/>";
let con = ", ";



// criação de observadores de evento
document.addEventListener("DOMContentLoaded", function() {
    // primeira seção de código
    document.getElementById("bt-ativar-reverse-1").addEventListener("click", magica1);
    document.getElementById("bt-resetar-1").addEventListener("click", resetar);
})