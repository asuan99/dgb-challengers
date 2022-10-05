const slide_btns = document.querySelectorAll(".slide-btn"),
    slide = document.querySelector(".js-slide"),
    slide_page = slide.querySelector(".slide-banner");

const SHOW_OPA = "showO";

function clickBtn() {
    slide_btns.forEach(btn => {
        btn.addEventListener("click", (event) => {
            const previous_slide = slide.querySelector(".showO");

            if(event.target.name === "left_move") {
                if(!previous_slide.previousElementSibling) return;

                const current_slide = previous_slide.previousElementSibling;

                previous_slide.classList.remove(SHOW_OPA);
                current_slide.classList.add(SHOW_OPA);
                nowSlidePage(-1);
            }
            else if(event.target.name === "right_move") {
                if(!previous_slide.nextElementSibling) return;

                const current_slide = previous_slide.nextElementSibling;

                previous_slide.classList.remove(SHOW_OPA);
                current_slide.classList.add(SHOW_OPA);

                nowSlidePage(1)
            }
        })
    })
}

function nowSlidePage(num) {
    let page_count = document.querySelector(".slide-page");
    let now_page = parseInt(page_count.innerHTML.substring(0, 1));

    console.log(now_page);
    now_page += num;
    page_count.innerHTML = `${now_page}/3`;
}

function init() {
    clickBtn();
}

init();