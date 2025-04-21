
const navbar = document.getElementById('nav-overlay');
const openBtn = document.getElementById('btn-nav-medium-atv');
const opentBtn = document.getElementById('bt-nav-medium-cls');

function openNavMobile() {
    navbar.classList.remove('hidden');
    navbar.classList.add('show');
}

function closeNavMobile() {
    navbar.classList.remove('show');
    navbar.classList.add('hidden');
}