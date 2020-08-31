'use strict';

const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

input.oninput = function () {
    if (input.value === '') {
       nameOutput.textContent = 'незнакомец';
    } else{
    nameOutput.textContent = input.value;
    }
}


