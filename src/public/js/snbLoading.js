const category = document.querySelector(".category"),
    toggleBtns = category.querySelectorAll(".toggleBtn"),
    titles = category.querySelectorAll(".title"),
    items = category.querySelectorAll(".category-item");

const SHOW = "show";
const CLICKED_ITEM = "clicked-item"

function toggle() {
    titles.forEach(title => {
        title.addEventListener("click", () => {
            const current_category = title.parentElement.nextElementSibling;
            const previous_category = category.querySelector(".show");

            current_category.classList.add(SHOW);
            if(previous_category) previous_category.classList.remove(SHOW);
        })
    })
    toggleBtns.forEach(toggleBtn => {
        toggleBtn.addEventListener("click", () => {
            const current_category = toggleBtn.parentElement.nextElementSibling;
            const previous_category = category.querySelector(".show");

            current_category.classList.add(SHOW);
            if(previous_category) previous_category.classList.remove(SHOW);
        })
    })
}

function clickItem() {
    items.forEach(item => {
        item.addEventListener("click", () => {
            const previous_item = category.querySelector(".clicked-item");

            if(item === previous_item) return;

            item.classList.add(CLICKED_ITEM);
            previous_item.classList.remove(CLICKED_ITEM);

            loadContent(item.id);
        })
    })
}

function loadContent(ContentName) {
    console.log(ContentName + "해당하는 Content 열기");
}

function init() {
    toggle();
    clickItem();
}

init();