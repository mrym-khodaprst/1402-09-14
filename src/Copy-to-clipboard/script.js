document.getElementById("copyButton").addEventListener("click", copy);
function copy() {
  const copyText = document.getElementById("myInput");

  if (navigator.clipboard) {
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value)
      .then(() => {
        alert("Copied the text: " + copyText.value);
      })
      .catch((err) => {
        console.error("Unable to copy text: ", err);
        alert("Failed to copy text. Please try again.");
      });
  } else {
    // Fallback for browsers that do not support Clipboard API
    copyText.select();
    document.execCommand("copy");

    alert("Copied the text: " + copyText.value);
  }
}
