const nav = document.querySelector('#header-nav');
const navBtn = document.querySelector('#menu-button');
const navBtnImg = document.querySelector('#menu-button-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/nav-opened.svg"
    } else {
        navBtnImg.src = "./img/nav-closed.svg"
    }
}