console.log("Arquivo JS abriu");

let opt = document.getElementById("output-1");
let opt2 = document.getElementById("output-2");
let quebra = "<br/><br/>"

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
    opt2.innerHTML = '';
}

function magica2() {
    let nums = [100, 4, 20];
    let nums2 = [100, 4, 20];
    let nums3 = [100, 4, 20];
    let original = [100, 4, 20];

    nums.sort();
    nums2.sort((a,b) => a-b);
    nums3.sort((a,b) => b-a);


    opt2.innerHTML = original.join(", ") + quebra+ nums.join(", ") + quebra + nums2.join(", ") + quebra + nums3.join(", ");
}

// criar observadores de eventos com os botões
document.addEventListener('DOMContentLoaded', function() {
    // primeira seção com códigos
    document.getElementById("bt-ativar-sort-1").addEventListener("click", magica1);
    document.getElementById("bt-resetar-1").addEventListener("click", resetar);
    // segunda seção com códigos
    document.getElementById("bt-ativar-sort-2").addEventListener("click", magica2);
    document.getElementById("bt-resetar-2").addEventListener("click", resetar);
});