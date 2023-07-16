const fontswitch = document.getElementById("font-size-control");
const textToShow = document.getElementById("text");

fontswitch.addEventListener("input", eventHandler);

function eventHandler() {
   const fontSize = fontswitch.value;
  
  // Changing the font-size depending on switch position
  textToShow.style.fontSize = `${fontSize}px`;
}

eventHandler();

