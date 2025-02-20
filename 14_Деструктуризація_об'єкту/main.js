
const hotel = {
  id: 1597143589624,
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
    location:{
        city: 'Hawaii',
        street: 'Palm Tree Blvd',
        number: '123A',
    }
  };

  const qwer = {
    qwe:'sdf'
  }

console.log(hotel.location.city); // Hawaii

const { name,  stars,  capacity, location:{city, street, number }
} = hotel;

console.log(city);
// const {name, stars, capacity} = hotel
  
  // console.log( capacity);
  function fn({name, stars, capacity, location}){
    // const { name, stars, capacity, location } = obj
console.log(location);
console.log(location.city);

}
function fn1({name, ...obj}){
console.log(name);
console.log(obj);

}

// fn(hotel)
// fn1(hotel)

// =================================================
let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };




const {size:{ width, height},  items:[qwerty, item2], extra} = options

// console.log(size);
// console.log(items);
// console.log(extra);
console.log(width);
// console.log(qwerty);







//6 ============================ деструктуризація масиву ===========

// const array = [1, 2, 3, 4, 5];

// console.log(array);


// const [aqwer, b, c, d, e] = array

// console.log(aqwer);



// const rgb = [200, 255, 100];

// const [red, green, blue, grey = 400] = rgb;

// console.log(`Red: ${red}, Green: ${green} Blue: ${blue}, Grey: ${grey}`);



// const [red1, ...colors] = rgb;
// const [,,blue] = rgb;
// console.log(red);
// console.log(colors);
// console.log(blue);

// let red, green, blue;

// [red, green, blue] = rgb;



//8 =================== example practice ======================

// Деструктуризувати наступні об’єкти
// Об’єкт user

// const user = {
//   name: 'John',
//   age: 30,
//   email: 'john@example.com'
// }


// const {name, age, email} = user


// Об’єкт car
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  features: ['power windows', 'rear camera', 'navigation'],
  safety: {
    airbags: true,
    antilock_brakes: true,
    stability_control: true
  }
}



  const {make, model, year, features:[windows, camera, navigation], safety:{airbags, antilock_brakes, stability_control}} = car;

  console.log('make :>> ', make);
  console.log('model :>> ', model);
  console.log('year :>> ', year);
console.log('windows :>> ', windows);
console.log('camera :>> ', camera);
console.log('navigation :>> ', navigation);


//8 ==============================================

//4 Напишіть функцію, яка отримує об'єкт з ім'ям, прізвищем та віком та використовує деструктуризацію для повернення рядка, що містить інформацію про цю людину в такому форматі: "Мене звати Ім'я Прізвище і мені Вік років".

const person = {
    name: 'Nelli',
    surname: 'Laroy',
    age: 25
  };

  function personInfo({name, surname, age}){
return `Мене звати ${name} ${surname} і мені ${age} років`
  }
 
  console.log(personInfo(person));