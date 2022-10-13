const camper_categories = document.querySelectorAll(".camper-category");

function loadContent() {
    camper_categories.forEach(camper => {
        camper.addEventListener("click", (e) => {
            const previous_camper = document.querySelector(".clicked-story");
            previous_camper.classList.remove("clicked-story");
            camper.classList.add("clicked-story");
        })
    })
}

function init() {
    loadContent();
}

init();