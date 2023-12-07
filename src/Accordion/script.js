
const accordionTitles = document.querySelectorAll(".section");
const accordionContents = document.querySelectorAll(".content");
accordionTitles.forEach((section,index) => {
  section.addEventListener("click", () => {
    if (accordionContents[index].classList.contains("block")) {
        accordionContents[index].classList.add("hidden");
      accordionContents[index].classList.remove("block");
    } else {
      accordionContents.forEach((accordionContent) => {
        accordionContent.classList.add("hidden");
        accordionContent.classList.remove("block");
      });
      accordionContents[index].classList.remove("hidden");
      accordionContents[index].classList.add("block");
    }
  });
});
