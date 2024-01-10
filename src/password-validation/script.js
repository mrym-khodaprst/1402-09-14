var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
  
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("text-red-700");
    letter.classList.add("text-green-700");
  } else {
    letter.classList.remove("text-green-700");
    letter.classList.add("text-red-700");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("text-red-700");
    capital.classList.add("text-green-700");
  } else {
    capital.classList.remove("text-green-700");
    capital.classList.add("text-red-700");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("text-red-700");
    number.classList.add("text-green-700");
  } else {
    number.classList.remove("text-green-700");
    number.classList.add("text-red-700");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("text-red-700");
    length.classList.add("text-green-700");
  } else {
    length.classList.remove("text-green-700");
    length.classList.add("text-red-700");
  }
}
