console.log("JS toSorted ativada!")

// variáveis globais
let opt1 = document.getElementById("output-1");

let quebra = "<br/>";
let quebra2 = "<br/><br/>";
let con = ", ";


function resetar() {
    opt1.innerHTML = quebra2+quebra;
}


function magica1() {
    let inimigos = ["vegê", "isadora", "alex", "filipe", "lucas"];
    let inimigosOrdenados = inimigos.toSorted();

    opt1.innerHTML = inimigos.join(con) + quebra2 + inimigosOrdenados.join(con);
}


// criação dos observadores de eventos
document.addElementById("DOMContentLoaded", function() {
    // primeira seção com códigos
    document.getElementById("bt-ativar-tosorted-1").addEventListener("click", magica1);
    document.getElementById("bt-resetar-1").addEventListener("click", resetar);
});