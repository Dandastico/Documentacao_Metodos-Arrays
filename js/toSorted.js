console.log("JS toSorted ativada!")

// variáveis globais
let opt1 = document.getElementById("output-1");
let opt2 = document.getElementById("output-2");

let quebra = "<br/>";
let quebra2 = "<br/><br/>";
let con = ", ";


function resetar() {
    opt1.innerHTML = quebra2+quebra;
    opt2.innerHTML = quebra2+quebra2+quebra2+quebra;
}


function magica1() {
    let inimigos = ["vegê", "isadora", "alex", "filipe", "lucas"];
    let inimigosOrdenados = inimigos.toSorted();

    opt1.innerHTML = inimigos.join(con) + quebra2 + inimigosOrdenados.join(con);
}


function magica2() {
    let nums = [100, 4, 20];
    let numsOrdenadosStr = nums.toSorted();
    let numsOrdenadosAsc = nums.toSorted((a,b) => a-b);
    let numsOrdenadosDes = nums.toSorted((a,b) => b-a);

    opt2.innerHTML = nums.join(con) + quebra2 + numsOrdenadosStr.join(con) + quebra2 + numsOrdenadosAsc.join(con) + quebra2 + numsOrdenadosDes.join(con)
}


// criação dos observadores de eventos
document.addEventListener("DOMContentLoaded", function() {
    // primeira seção com códigos
    document.getElementById("bt-ativar-tosorted-1").addEventListener("click", magica1);
    document.getElementById("bt-resetar-1").addEventListener("click", resetar);
    // segunda seção com códigos
    document.getElementById("bt-ativar-tosorted-2").addEventListener("click", magica2);
    document.getElementById("bt-resetar-2").addEventListener("click", resetar);
});