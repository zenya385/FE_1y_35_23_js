
// const myBox = document.querySelector('.box')

// myBox.addEventListener('mouseleave', onMouseLeave )


// const onMouseEnter = function(evt) {
//     console.log('evt :>> ', evt.currentTarget);  
//     const box = evt.currentTarget; 
//     box.classList.add('active')
// }
// myBox.addEventListener('mouseenter', onMouseEnter )


// function onMouseLeave(evt) {
//   console.log('evt :>> ', evt.currentTarget);  
//    const box = evt.currentTarget; 
//    box.classList.remove('active')
// }

// window.addEventListener('mousemove',(event)=>{
//     event.preventDefault()
//     console.log('clientX :>> ', event.clientX);
//     console.log('clientY :>> ', event.clientY);
// })



// document.addEventListener('keydown', (e)=>{
// console.log('Keydown :>> ', e);
// })

// document.addEventListener('keyup', (e)=>{
// console.log('Keyup :>> ', e);
// })
// document.addEventListener('keypress', (e)=>{
// console.log('Keypress :>> ', e);
// })

// document.addEventListener('keypress', keyPress)

// function keyPress(e) {
// console.log('Keypress :>> ', e);
// }


// document.addEventListener('keydown', (e)=>{
//     console.log('Key :>> ', e.key);
//     console.log('code :>> ', e.code);
//     })

// document.addEventListener('keydown', (e)=>{
//   e.preventDefault()
//   if((e.ctrlKey || e.metaKey) &&  e.key === 's'){
//     console.log("«Ctrl + s» or «Command + s» combo");
//     }})

// document.addEventListener('keydown', (e)=>{
//   e.preventDefault()
//   if((e.ctrlKey || e.metaKey) &&  e.code === 'KeyS'){
//     console.log("«Ctrl + s» or «Command + s» combo");
//     }})

//6 ===================== події миші ====================
//4 mousedown/mouseup - клікання/відпускання кнопки миші над елементом.
//4 mouseover/mouseout - курсор заходить/виходить з елемента.
//4 mousemove- кожне переміщення миші над елементом викликає цю подію.
//4 click - спрацьовує після mousedown, а потім mouseup над тим же елементом, якщо була використана ліва кнопка миші
//4 dblclick - спрацьовує після двох кліків на одному елементі за короткий проміжок часу. На сьогоднішній день рідко використовується.
//4 contextmenu - спрацьовує при натисканні правої кнопки миші. Є й інші способи відкрити контекстне меню, напр. за допомогою спеціальної клавіші на клавіатурі, але це вже не зовсім подія миші.

//4 Координати: clientX/Y, pageX/Y
//4 Усі події миші надають координати у двох варіантах:
//4 Відносно Window: clientX та clientY.
//4 Відносно Document: pageX та pageY.



// window.addEventListener('mousemove',(event)=>{
//     event.preventDefault()
//     console.log('clientX :>> ', event.clientX);
//     console.log('clientY :>> ', event.clientY);
// })


// // ✅ Хороша практика — виділена функція з перевіркою ключа
window.addEventListener('keydown', (e) => {
    const { code, key } = e;

    // console.log('e :>> ', code);
    console.log('e :>> ', key);

    switch (key) {
        case 'ArrowLeft':
            console.log('← Вліво');
            break;
        case 'ArrowRight':
            console.log('→ Вправ');
            break;
        case 'Escape':
            console.log('❌ Вийти');
            break;
    
        default:
            break;
    }
})



// ✅ Делегування подій — ефективніше, ніж навішування на кожен елемент