
// const myForm = document.querySelector('.js-register-form')

// // console.dir('myForm :>> ', myForm.event);  // e, evt, event


// myForm.addEventListener('submit', onFormSubmit)


// function onFormSubmit(event) {
//    event.preventDefault() 
// // //    console.dir(event.currentTarget.elements.email.value);
// // //    console.dir(event.currentTarget.elements.password.value);
// // //    console.dir(event.currentTarget.elements.subscription.value);

// const formData = event.currentTarget.elements;
// const mail = formData.email.value;
// const password = formData.password.value;
// const subscription = formData.subscription.value;

// // console.log('mail :>> ', mail);
// // console.log('password :>> ', password);
// // console.log('subscription :>> ', subscription);

// const formData = new FormData(event.currentTarget)
// // console.log('formData :>> ', formData);

// formData.forEach((value, name)=>{
// console.log('name :>> ', name);
// console.log('value :>> ', value);

// })
// }


//6==================== події ==================

// * - focus 
// * - input и change



const input = document.querySelector('.js-input');
const lable = ocument.querySelector('.js-button > span');
const checkox = document.querySelector('.js-license');
const btn = document.querySelector('.js-button');


input.addEventListener('focus', onInputFocus);
// input.addEventListener('blur', onInputBlur);
// input.addEventListener('change', onInputChange);
// input.addEventListener('input', onInputChange);

function onInputFocus(e) {
    
}