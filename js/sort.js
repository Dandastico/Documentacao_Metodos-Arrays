console.log("Arquivo JS abriu");

let opt = document.getElementById("output-1");
let opt2 = document.getElementById("output-2");
let opt3 = document.getElementById("output-3");
let quebra = "<br/>";
let quebra2 = "<br/><br/>";
let con = ", ";


function magica1() {
    let strings = ["daniel", "ama", "jordan"];
    let original = ["daniel", "ama", "jordan"];

    strings.sort();
    console.log(original);
    console.log(strings);

    opt.innerHTML = original.join(", ") + quebra2 + strings.join(con);
}


function magica2() {
    let nums = [100, 4, 20];
    let nums2 = [100, 4, 20];
    let nums3 = [100, 4, 20];
    let original = [100, 4, 20];

    nums.sort();
    nums2.sort((a,b) => a-b);
    nums3.sort((a,b) => b-a);

    opt2.innerHTML = original.join(con) + quebra2 + nums.join(con) + quebra2 + nums2.join(con) + quebra2 + nums3.join(con);
}


function magica3() {
    let cidades = ["brasilia", "belo horizonte", "salvador", "porto seguro"];
    let cidadesOrdenadas;
    let original = ["brasilia", "belo horizonte", "salvador", "porto seguro"];

    cidadesOrdenadas = cidades.sort();

    opt3.innerHTML = original.join(con) + quebra2 + cidades.join(con) + quebra + cidadesOrdenadas.join(con);
}


function resetar() {
    opt.innerHTML = quebra+quebra2;
    opt2.innerHTML = quebra2+quebra2+quebra2+quebra;
    opt3.innerHTML = quebra2+quebra2;
}


// criar observadores de eventos com os botões
document.addEventListener('DOMContentLoaded', function() {
    // primeira seção com códigos
    document.getElementById("bt-ativar-sort-1").addEventListener("click", magica1);
    document.getElementById("bt-resetar-1").addEventListener("click", resetar);
    // segunda seção com códigos
    document.getElementById("bt-ativar-sort-2").addEventListener("click", magica2);
    document.getElementById("bt-resetar-2").addEventListener("click", resetar);
    // terceira seão com códigos
    document.getElementById("bt-ativar-sort-3").addEventListener("click", magica3);
    document.getElementById("bt-resetar-3").addEventListener("click", resetar);
});