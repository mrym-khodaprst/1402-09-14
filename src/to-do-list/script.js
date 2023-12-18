// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("button");
  const txt = document.createTextNode("\u00D7");
  span.className = "close absolute right-0 top-0 py-3 px-4 hover:bg-red-600 hover:text-white";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    const div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('line-through');;
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  const li = document.createElement("li");
  li.className = "cursor-pointer relative py-3 pe-2 ps-10";
  const inputValue = document.getElementById("myInput").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  const span = document.createElement("button");
  const txt = document.createTextNode("\u00D7");
  span.className = "close absolute right-0 top-0 py-3 px-4 hover:bg-red-700 hover:text-white";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
    }
  }
}