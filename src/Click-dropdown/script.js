function myFunction() {
    document.getElementsByClassName("drop-content")[0].classList.toggle("!block");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("drop-content");
        if (dropdowns[0].classList.contains('!block')) {
            dropdowns[0].classList.remove('!block');
        }
    }
} 