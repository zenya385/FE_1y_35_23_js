

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


// const list = document.querySelector('.list')
// const item = document.querySelector('.item')
// const items = document.querySelectorAll('.item')

// console.log('items :>> ', items);
// const title = document.createElement('h1');
// title.textContent = 'Hello world!!!'
// console.log('title :>> ', title);

// const image = document.createElement("img");
// image.src = "https://picsum.photos/id/9/320/240";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

// item.append(title, image);

// item.prepend(title, image);

// list.after(title,image);

// list.before(title, image);

// list.appendChild(title);

// list.insertBefore(image, items[1] );


// item.remove()




//3 ========================== Властивість innerHTML =======================

// const title = document.querySelector('.title') 
// const list = document.querySelector('.list') 



// list.innerHTML = '<li><h2>hello!</h2><img src="https://picsum.photos/id/13/640/480" alt="qwerty"></li>' 
// list.innerHTML = ''
// console.log(list.innerHTML);


const technologies = ["HTML", "CSS", "JavaScript", "React", "Node", 'qwerty'];
const list = document.querySelector(".list");

const markup = technologies
.map((technology) => `<li class="list-item">${technology}</li>`).join('');

// Check the console, you'll see a single string with HTML tags
console.log(markup);

// Adding all the markup in one operation
list.innerHTML = markup;

//2 "beforebegin" - перед elem
//2 "afterbegin" - всередині elem, перед усіма дітьми
//2 "beforeend" - всередині elem, після усіх дітей
//2 "afterend" - після elem

// list.insertAdjacentHTML("beforebegin", markup)
// list.insertAdjacentHTML("afterbegin", markup)
// list.insertAdjacentHTML("beforeend", markup)
// list.insertAdjacentHTML("afterend", markup)