document.getElementsByClassName("dropbtn")[0].addEventListener("click", dropConrent);
function dropConrent() {
    document.getElementsByClassName("drop-content")[0].classList.toggle("!block");
}

window.addEventListener ("click", function (event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("drop-content");
        if (dropdowns[0].classList.contains('!block')) {
            dropdowns[0].classList.remove('!block');
        }
    }
});
