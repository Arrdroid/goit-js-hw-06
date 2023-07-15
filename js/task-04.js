const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const counterValueElement = document.getElementById('value');

// Initial value variable
let baseValue = 0;

//Function to change baseValue while clicking the button
function shiftbaseValue() {
  counterValueElement.textContent = baseValue;
}

// Adding click listeners to the buttons
decrementButton.addEventListener('click', () => {
  baseValue -= 1;
  shiftbaseValue();
});

incrementButton.addEventListener('click', () => {
  baseValue += 1;
  shiftbaseValue();
});


shiftbaseValue();
