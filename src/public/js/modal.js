const login_btn = document.querySelector(".js-login"),
    modal = document.querySelector(".js-modal"),
    overlay = document.querySelector(".overlay"),
    close_btn = document.querySelector(".js-modal-close"),
    signIn = document.querySelector(".modal-signIn"),
    signUp = document.querySelector(".modal-signUp"),
    select_bar = document.querySelector(".select-bar");

const NONE = "none";
const CLICKED_MODE = "clicked-mode";

function openLoginModal() {
    modal.classList.remove(NONE);
    overlay.classList.remove(NONE);
}

function closeLoginModal() {
    modal.classList.add(NONE);
    overlay.classList.add(NONE);
}

function clickSign(event) {
    if(event.id === "signIn") {
        signIn.classList.add(CLICKED_MODE);
        signUp.classList.remove(CLICKED_MODE);
        select_bar.style.left = "0";
        document.querySelector(".modal-signIn-content").classList.remove(NONE);
        document.querySelector(".modal-signUp-content").classList.add(NONE);
    } else {
        signIn.classList.remove(CLICKED_MODE);
        signUp.classList.add(CLICKED_MODE);
        select_bar.style.left = "50%";
        document.querySelector(".modal-signIn-content").classList.add(NONE);
        document.querySelector(".modal-signUp-content").classList.remove(NONE);
    }
}

function init() {
    login_btn.addEventListener("click", openLoginModal);
    close_btn.addEventListener("click", closeLoginModal);
}

init();