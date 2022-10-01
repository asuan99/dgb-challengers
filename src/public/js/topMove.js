const btn = document.getElementById("scrollTopBtn");

function checkOnload() {
    window.onload = function() {
        setTimeout (function () {
        scrollTo(0, 0);
        }, 100);
    }
}

function checkTopMove(){
    if(window.scrollY >= 116) {
        btn.style.visibility = "visible";
    } else {
        btn.style.visibility = "hidden";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function init() {
    checkTopMove();
    checkOnload();
    btn.addEventListener("click", scrollToTop);
    setInterval(checkTopMove, 100);
}

init();