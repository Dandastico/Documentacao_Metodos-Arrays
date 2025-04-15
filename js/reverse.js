console.log("JS Reverse foi ativada!")

// variáveis globais
let opt1 = document.getElementById("output-1");
let opt2 = document.getElementById("output-2");
let opt3 = document.getElementById("output-3");

let quebra = "<br/>";
let quebra2 = "<br/><br/>";
let con = ", ";


function resetar() {
    opt1.innerHTML = quebra2 + quebra;
    opt2.innerHTML = quebra2 + quebra2 + quebra;
    opt3.innerHTMl = quebra2 + quebra2;
}


function magica1() {
    let nomes = ["prof carvalho", "ash ketchum da cidade de pallet", "misty", "brock"];
    let original = ["prof. carvalho", "ash ketchum da cidade de pallet", "misty", "brock"];

    nomes.reverse();

    opt1.innerHTML = original.join(con) + quebra2 + nomes.join(con);
}


function magica2() {
    let amigos = ["pikachu", "zapdos", "ratatatatatatatatata", "bulbassauro"];
    let original = ["pikachu", "zapdos", "ratatatatatatatatata", "bulbassauro"];
    let amigosOrdenados = ["pikachu", "zapdos", "ratatatatatatatatata", "bulbassauro"];

    amigosOrdenados.sort();
    amigos.sort();
    amigos.reverse();

    opt2.innerHTML = original.join(con) + quebra2 + amigosOrdenados.join(con) + quebra2 + amigos.join(con);
}


function magica3() {
    let amigos = ["pikachu", "zapdos", "ratatatatatatatatata", "bulbassauro"];
    let original = ["pikachu", "zapdos", "ratatatatatatatatata", "bulbassauro"];

    let amigosReverse = amigos.reverse();

    opt3.innerHTML = original.join(con) + quebra2 + amigos.join(con)+ quebra + amigosReverse.join(con);
}


// criação de observadores de evento
document.addEventListener("DOMContentLoaded", function() {
    // primeira seção de código
    document.getElementById("bt-ativar-reverse-1").addEventListener("click", magica1);
    document.getElementById("bt-resetar-1").addEventListener("click", resetar);
    // segunda seção de código
    document.getElementById("bt-ativar-reverse-2").addEventListener("click", magica2);
    document.getElementById("bt-resetar-2").addEventListener("click", resetar);
    // terceira seção de código
    document.getElementById("bt-ativar-reverse-3").addEventListener("click", magica3);
    document.getElementById("bt-resetar-3").addEventListener("click", resetar);
})