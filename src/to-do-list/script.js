// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close absolute right-0 top-0 py-3 px-4 hover:bg-red-600 hover:text-white";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.remove('hover:bg-zinc-300')
    ev.target.classList.toggle('bg-zinc-400');
    ev.target.classList.toggle('text-white');
    ev.target.classList.toggle('line-through');
    ev.target.classList.toggle("after:content-['✔']");
    ev.target.classList.toggle('after:absolute');
    ev.target.classList.toggle('after:text-white');
    ev.target.classList.toggle('after:top-3');
    ev.target.classList.toggle('after:left-4');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  li.className = "cursor-pointer relative py-3 pe-2 ps-10 bg-zinc-200 text-lg transition duration-200 hover:bg-zinc-300";
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close absolute right-0 top-0 py-3 px-4 hover:bg-red-700 hover:text-white";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}