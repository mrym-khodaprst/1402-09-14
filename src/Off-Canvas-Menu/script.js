function openNav() {
  document.querySelector(".sidenav").style.width = "250px";
  document.querySelector(".main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.querySelector(".sidenav").style.width = "0";
  document.querySelector(".main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}