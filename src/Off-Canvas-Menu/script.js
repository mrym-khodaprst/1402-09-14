const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".closebtn");
const offCanvas = document.querySelector(".sidenav");

openBtn.addEventListener('click', function (e) {
  offCanvas.classList.remove('hidden');
  offCanvas.classList.add("block");
})
closeBtn.addEventListener('click', function (e) {
  offCanvas.classList.remove('block');
  offCanvas.classList.add('hidden');
})
document.addEventListener('click', function (e) {
    // if (!e.target.matches('.offCanvas') && e.target !== openBtn)
    if (!offCanvas.contains(e.target) && e.target !== openBtn)
 {
            offCanvas.classList.remove('block');
            offCanvas.classList.add('hidden');
    }
});