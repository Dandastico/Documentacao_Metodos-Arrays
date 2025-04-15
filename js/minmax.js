console.log("JS minmax ativada!");

// variáveis globais
let opt1 = document.getElementById("output-1");
let opt2 = document.getElementById("output-2");
let opt3 = document.getElementById("output-3");
let opt4 = document.getElementById("output-4");

let quebra = "<br/>";
let quebra2 = "<br/><br/>";
let con = ", ";


function resetar() {
    opt1.innerHTML = quebra2+quebra2+quebra;
    opt2.innerHTML = quebra2+quebra;
    opt3.innerHTML = quebra2+quebra2+quebra;
    opt4.innerHTML = quebra2+quebra;
}


function matematica1() {
    let m = Math.min(10, 5, 8);
    let n = NaN;
    let inf = Math.min();

    opt1.innerHTML = m+quebra2+Math.min(m,n)+quebra2+inf;
}


function matematica2() {
    let media = (10 +10) / 2 + 1;

    opt2.innerHTML = media+quebra2+Math.min(10, media);
}


function matematica3() {
    let m = Math.max(10, 5, 8);
    let n = NaN;
    let inf = Math.max();

    opt3.innerHTML = m+quebra2+Math.min(m,n)+quebra2+inf;
}


function matematica4() {
    let media = (0 + 0) / 2 + (-1);

    opt4.innerHTML = media+quebra2+Math.max(0, media);
}


// criação de observadores de eventos
document.addEventListener("DOMContentLoaded", function() {
    // primeira seção do código com min()
    document.getElementById("bt-ativar-min-1").addEventListener("click", matematica1);
    document.getElementById("bt-resetar-1").addEventListener("click", resetar);
    // segunda seção de código com min()
    document.getElementById("bt-ativar-min-2").addEventListener("click", matematica2);
    document.getElementById("bt-resetar-2").addEventListener("click", resetar);
    // primeira seção de código com max()
    document.getElementById("bt-ativar-max-1").addEventListener("click", matematica3);
    document.getElementById("bt-resetar-3").addEventListener("click", resetar);
    // segunda seção de código com max()
    document.getElementById("bt-ativar-max-2").addEventListener("click", matematica4);
    document.getElementById("bt-resetar-4").addEventListener("click", resetar);
});