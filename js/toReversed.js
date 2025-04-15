console.log("JS toReversed foi ativada!");

// variáveis globais
let opt1 = document.getElementById("output-1");
let opt2 = document.getElementById("output-2");

let quebra = "<br/>";
let quebra2 = "<br/><br/>";
let con = ", ";


function resetar() {
    opt1.innerHTML = quebra2+quebra;
    opt2.innerHTML = quebra2+quebra2+quebra;
}



function magica1() {
    let nomes = ["prof carvalho", "ash ketchum da cidade de pallet", "misty", "brock"];
    let nomesInvertidos = nomes.toReversed();

    opt1.innerHTML = nomes.join(con) + quebra2 + nomesInvertidos.join(con);
}


function magica2() {
    let amigos = ["pikachu", "zapdos", "ratatatatatatatatata", "bulbassauro"];
    let amigosOrdenadosAsc = amigos.toSorted();
    let amigosOrdenadosDes = amigosOrdenadosAsc.toReversed();

    opt2.innerHTML = amigos.join(con)+quebra2+amigosOrdenadosAsc.join(con)+quebra2+amigosOrdenadosDes.join(con);
}


// criação de observadores de eventos
document.addEventListener("DOMContentLoaded", function() {
    // primeira seção com códigos
    document.getElementById("bt-ativar-toreversed-1").addEventListener("click", magica1);
    document.getElementById("bt-resetar-1").addEventListener("click", resetar);
    // segunda seção com códigos
    document.getElementById("bt-ativar-toreversed-2").addEventListener("click", magica2);
    document.getElementById("bt-resetar-2").addEventListener("click", resetar);
});