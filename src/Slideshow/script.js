let slideIndex = 0;
showSlides(slideIndex);
function nextSlides() {
  slideIndex += 1
  showSlides(slideIndex);
}
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}
function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length - 1) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" bg-gray-700", "");
  }
  console.log(slideIndex);
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " bg-gray-700";
}
setInterval(function () {
  nextSlides();
}, 2000);
// document.getElementsByClassName("dot")[n].addEventListener("click", currentSlide[n]);
document.getElementsByClassName("prevButton")[0].addEventListener("click", function() {
  nextSlides(-1);
});
// Add event listener for the next button
document.getElementsByClassName("nextButton")[0].addEventListener("click", function() {
  nextSlides();
});