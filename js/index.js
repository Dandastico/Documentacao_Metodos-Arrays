console.log("JS Index abriu");

// variáveis globais
let opt1 = document.getElementById("output-1");
let opt2 = document.getElementById("output-2");
let quebra = "<br/>";
let quebra2 = "<br/><br/>";
let con = ", ";


function magica1() {
    let pokemons = ["bulbassauro", "squirtle", "charmander"];

    opt1.innerHTML = pokemons.join(con);
}


function magica2() {
    let pokemons = ["bulbassauro", "squirtle", "charmander"];

    opt2.innerHTML = pokemons[0];
}


function resetar() {
    opt1.innerHTML = quebra;
    opt2.innerHTML = quebra;
}

// criar observadores de eventos
document.addEventListener('DOMContentLoaded', function() {
    // primeira seção de código
    document.getElementById("bt-ativar-index-1").addEventListener("click", magica1);
    document.getElementById("bt-resetar-1").addEventListener("click", resetar);
    // segunda seção de código
    document.getElementById("bt-ativar-index-2").addEventListener("click", magica2);
    document.getElementById("bt-resetar-2").addEventListener("click", resetar);
});