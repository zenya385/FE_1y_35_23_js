

const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
  };

  console.log('hotel :>> ', hotel);

for (const key in hotel) {
   
        const element = hotel[key];
        
//    console.log('element :>> ', element);
}



//6 ========= Методи об'єкту Object.keys(), Object.values(), Object.entries()

//7 Object.keys (obj) - поверне масив, з ключами об'єкта obj у вигляді рядків.
//7 Object.values (obj) - поверне масив, зі значеннями властивостей об'єкта obj.
//7 Object.entries (obj) - поверне масив записів, кожним елементом якого буде ще один масив з 2-х елементів, ключа і значення цього ключа з об'єкта Obj.



const keys = Object.keys(hotel);
// console.log('keys :>> ', keys);

for(const key of keys ){
    console.log('key :>> ', hotel[key]);  //повернeтся  значення
    console.log('key :>> ', key);   //повернется ключі як рядочки
}

const values = Object.values(hotel);
// console.log('values :>> ', values);

const entries = Object.entries(hotel);
// console.log('entries :>> ', entries);

for (const entri of entries) {
    const key = entri[0]
    const value = entri[1]
console.log(`${key}   =>>  ${value}  `);
}



