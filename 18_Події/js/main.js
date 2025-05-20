


//^ Метод addEventListener()
//2 Додає слухача події на елемент.

//5 element.addEventListener(event, handler, options);

// event - ім'я події, рядок, наприклад "click".
// handler - колбек-функція, яка буде викликана під час настання події.
// options - необов'язковий об'єкт параметрів з розширеними налаштуваннями.


// const button = document.querySelector(".my-button");

button.addEventListener("click", () => {
  console.log("Button was clicked");
});

const button = document.querySelector(".my-button");

const handleClick = () => {
  console.log("Button was clicked");
};

button.addEventListener("click", handleClick);


const input = document.querySelector('[type="text"]')
const myForm = document.querySelector('[action="myForm"]')

// console.log('input :>> ', input);
// console.log('myForm :>> ', myForm);

myForm.addEventListener('submit', (event) => {
    event.preventDefault() //^ Забороняє перезавантаження сторінки
    // console.log('event :>> ', event);
    const data = input.value
    console.log("Ім'я користувача", data);

})



