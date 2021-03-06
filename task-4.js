'use strict';

const ref_btn = {
  dec: document.querySelector("button[data-action='decrement']"),
  inc: document.querySelector("button[data-action='increment']"),
 };

let counterValue = 0;

const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

ref_btn.dec.addEventListener('click', decrement);
ref_btn.inc.addEventListener('click', increment);
