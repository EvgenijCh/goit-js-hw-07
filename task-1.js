'use strict';

const selectByClass = document.querySelector('#categories');
console.log(`В списке ${selectByClass.children.length} категории`);
const titleOfCategories = document.querySelectorAll('.item');

titleOfCategories.forEach(element => {
  console.log(`Категория: ${element.querySelector('h2').textContent} `);
  console.log(
    `Количество элементов: ${element.querySelector('ul').children.length}`,
  );
});
