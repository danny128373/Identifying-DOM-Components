// number 1
const element = document.querySelector('.article__header');
element.innerHTML = `Welcome to the Daniel blog`;
//number 2
element.classList.add("important");
//number 3
const noDashed = document.querySelector('.dashed');
noDashed.classList.remove('dashed');
//number 4
const goldenrod = document.querySelector('.article__footer');
goldenrod.classList.add('goldenrod');