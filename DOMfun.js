// number 1
const element = document.querySelectorAll('.article__header');
element.item(0).innerHTML = `Welcome to the Daniel blog`;

//number 2
for (let i = 0; i < element.length; i++) {
  element.item(i).classList.add("important");
}

//number 3
const noDashed = document.querySelector('.dashed');
noDashed.classList.remove('dashed');

//number 4
const goldenrod = document.querySelector('.article__footer');
goldenrod.classList.add('goldenrod');