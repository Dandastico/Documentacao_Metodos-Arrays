console.log("Arquivo JS abriu");

let opt = document.getElementById("output-1");

function magica1() {
    let strings = ["daniel", "ama", "jordan"];
    let original = ["daniel", "ama", "jordan"];

    strings.sort();
    console.log(original);
    console.log(strings);

    opt.innerHTML = original.join(", ") + "<br />" + "<br />" + strings.join(", ");
}

function resetar() {
    opt.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', function() {
    // criar observadores de eventos com os botões
    document.getElementById("bt-ativar-sort1").addEventListener("click", magica1);
    document.getElementById("bt-resetar-1").addEventListener("click", resetar);
});