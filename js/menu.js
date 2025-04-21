
const navbar = document.getElementById('nav-overlay');
const body = document.body;

function openNavMobile() {
    console.log("openNavMobile");
    navbar.classList.remove('hidden');
    navbar.classList.add('show');
    body.style.overflow = "hidden";
    body.style.height = "100%";
}

function closeNavMobile() {
    navbar.classList.remove('show');
    navbar.classList.add('hidden');
    body.style.overflow = "";
    body.style.height = "";
}

// criar observadores de eventos
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-nav-medium-atv').addEventListener('click', openNavMobile);
    document.getElementById('btn-nav-medium-cls').addEventListener('click', closeNavMobile);
});