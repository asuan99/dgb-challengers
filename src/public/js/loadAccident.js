const accident_btns = document.querySelectorAll(".accident-btn");

const HOVERED = "js-hover"

function mouseOverBtn(){
    accident_btns.forEach(accident_btn => {
        accident_btn.addEventListener("mouseover", (event) => {
            console.log(event);
            accident_btn.classList.add(HOVERED);

            accident_btn.addEventListener("mouseout", () => {
                accident_btn.classList.remove(HOVERED);
            })
        })
    })
}

function init(){
    mouseOverBtn();
}

init();