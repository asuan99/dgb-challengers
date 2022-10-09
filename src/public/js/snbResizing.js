const snb = document.querySelector(".js-snb"),
    snb_btns = document.querySelectorAll(".snb-btn"),
    snb_open = document.querySelector(".snb-open");

const CLICKED_CLOSE = "clicked-close";
const HIDDEN = "hidden";

function snbToggle() {
    snb_btns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            console.log(e);
            const showSnb = btn.parentElement;
            console.log(showSnb.classList.contains("snb-close"));
            console.log(snb.firstElementChild);
            
            if(showSnb.classList.contains("snb-close")) {
                console.log("close");
                snb.firstElementChild.classList.add(HIDDEN);
                snb.classList.add(CLICKED_CLOSE);

                setTimeout(() => {
                    snb.classList.add("none");
                    snb_open.classList.remove("none");
                }, 1000);
            } else if(showSnb.classList.contains("snb-open")) {
                console.log("open");
                snb_open.classList.add("none");
                snb.firstElementChild.classList.remove(HIDDEN);
                snb.classList.remove("none");
                snb.classList.remove(CLICKED_CLOSE)
            }   
        })
    })
}

function init() {
    snbToggle();
}

init();