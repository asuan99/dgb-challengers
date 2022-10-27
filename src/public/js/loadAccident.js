const accident_btns = document.querySelectorAll(".accident-btn"),
    accident_date = document.querySelector("#accident_date");

const HOVERED = "js-hover"

function clickAccident(){
    accident_btns.forEach(accident_btn => {
        accident_btn.addEventListener("click", (event) => {
            accident_date.innerText = `${accident_btn.value}`;
            
        })
    })
}

function init(){
    clickAccident();

    console.log(accident_date);
}

init();