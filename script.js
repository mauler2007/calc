'use strict'

let parent = document.querySelector('.books');
let booksList = document.getElementsByClassName('book');
let advBlock = document.querySelector('.adv');

// console.log(chapterItem);
// console.log(booksList[2]);

booksList[0].insertAdjacentElement("beforebegin", booksList[1]);

parent.appendChild(booksList[2]);

booksList[3].insertAdjacentElement('afterend', booksList[2]);

document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

advBlock.remove();

let chaptersLists = document.querySelectorAll('ul');
let newChapter = document.createElement('li');
let chapterItems = document.querySelectorAll('li');

console.log(chapterItems);
newChapter.classList.add("new-chapter");
newChapter.textContent = 'Глава 8: За пределами ES6';

// let chapters =  document.querySelectorAll('.chapter');

chaptersLists[5].insertBefore(newChapter, chaptersLists[5].lastChild);
chaptersLists[5].append(chapterItems[56]);
chapterItems[9].after(chapterItems[12]);
chapterItems[12].after(chapterItems[14]);
chapterItems[16].before(chapterItems[8]);
chapterItems[38].before(chapterItems[45]);
chapterItems[40].after(chapterItems[38]);
chapterItems[43].after(chapterItems[41])

