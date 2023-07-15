const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const enteredValue = validationInput.value;
  const expectedValueLength = parseInt(validationInput.dataset.length);

  if (enteredValue.length === expectedValueLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }

  console.dir(validationInput);
  console.dir(typeof(validationInput.dataset.length));
});

