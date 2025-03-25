

// console.log(document.body.style.backgroundColor='red');



// const body = document.body

// body.style.backgroundColor='green';

// const list = document.querySelector('[class="list"]')

// console.log('list :>> ', list);

// const firstEl = list.firstElementChild;

// console.log('firstEl :>> ', firstEl);

// firstEl.style.color = 'yellow';

// const secondEl = firstEl.nextElementSibling

// secondEl.style.backgroundColor = 'black';


// const elem = document.querySelector('.item')
// const elById = document.getElementById('sp')

// console.log('elem :>> ', elem);
// console.log('elById :>> ', elById.textContent);

// const  firstElem = elem.firstElementChild


// const  firstElem = document.querySelector('span')
// console.log('firstElem :>> ', firstElem);

// firstElem.textContent = 'Hello world!'
// firstElem.style.color = 'red'

// const allEl = document.querySelectorAll('.link')

// console.log('allEl :>> ', allEl);


// const img = document.querySelector('img')

// img.src = 'https://picsum.photos/id/9/320/240'
// img.alt = 'bnkl;['
 
// console.log('img :>> ', img.src);
// console.log('alt :>> ', img.alt);


//^ ===========================DOM. Створення та видалення вузлів.=================================

// document.createElement(tagName);


const list = document.querySelector('.list')
const item = document.querySelector('.item')
const items = document.querySelectorAll('.item')

console.log('items :>> ', items);
const title = document.createElement('h1');
title.textContent = 'Hello world!!!'
console.log('title :>> ', title);

const image = document.createElement("img");
image.src = "https://picsum.photos/id/9/320/240";
image.alt = "Nature";
console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

// item.append(title, image);

// item.prepend(title, image);

// list.after(title,image);

// list.before(title, image);

// list.appendChild(title);

// list.insertBefore(image, items[1] );


item.remove()