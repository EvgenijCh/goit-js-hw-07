'use strict';

const checkInput = document.querySelector("#validation-input");
checkInput.addEventListener("blur", writeCorrectQtySymbol);

function writeCorrectQtySymbol() {
  if (
    checkInput.value.length === Number(checkInput.dataset.length)
  ) {
    checkInput.classList.remove("invalid");
    checkInput.classList.add("valid");
  } else {
    checkInput.classList.add("invalid");
    checkInput.classList.remove("valid");
  }
}