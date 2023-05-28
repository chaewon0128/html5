const menu = document.querySelector(".menu");
const li = document.getElementsByClassName("menu_item")

function clickHandler (e) {
    for ( list of li) {
        list.classList.remove("is-active")
    }
    let target = e.target;
if(target.className === "menu_button") {
    target.parentNode.classList.add("is-active")
}
}

menu.addEventListener("click",clickHandler)