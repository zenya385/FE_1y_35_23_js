// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

let cost;

const subscription = "qwer"; //  "free" , 'VIP', 'pro'

// subscription ===  "free"
// subscription ===  "VIP"
// subscription ===  "pro"
// subscription ===  "premium"

switch (subscription) {
  case "free":
    cost = 0;
    break;

  case "VIP":
    cost = 1000;
    break;

  case "pro":
    cost = 500;
    break;

  case "premium":
    cost = 200;
    break;

  default:
  // console.log('Невірний тип підписки! ');
}

// console.log(cost);

// виведіть скільки днів у кожному місяці року січень  лютий березень квітень травень червень липень серпень вересень жовтень листопад грудень

let months = "березень,";
const perDay31 = "У цьому місяці 31 день";
const perDay30 = "У цьому місяці 30 день";
const perDay28 = "У цьому місяці 28 день";

// if( 'січень' === months ){
//     console.log( perDay31);
// } else if  ('лютий' === months){
//     console.log( perDay28);

// } else if  ('березень' === months){
//     console.log( perDay31);

// } else if  ('квітень' === months){
//     console.log( perDay30);

// } else if  ('травень' === months){
//     console.log( perDay31);

// } else if  ('червень' === months){
//     console.log( perDay30);

// } else if  ('липень' === months){
//     console.log( perDay31);

// }else{
//     console.log('Такого місяця не існує ');
// }

// switch (months) {
//   case "січень":
//     console.log(perDay31);
//     break;
//   case "лютий":
//     console.log(perDay28);
//     break;
//   case "березень":
//     console.log(perDay31);
//     break;
//   case "квітень":
//     console.log(perDay30);
//     break;
//   case "травень":
//     console.log(perDay31);
//     break;
//   case "червень":
//     console.log(perDay30);
//     break;
//   case "липень":
//     console.log(perDay31);
//     break;

//   default:
//     console.log('Такого місяця не існує ');
//     break;
// }

// switch (months) {
//   case "січень":   // if('березень' === months)
//   case "березень":
//   case "травень":
//   case "липень":
//     console.log(perDay31);
//     break;

//   case "лютий":
//     console.log(perDay28);
//     break;

//   case "квітень":
//   case "червень":
//     console.log(perDay30);
//     break;

//   default:
//     console.log("Такого місяця не існує");
//     break;
// }


// const input = prompt("Введіть")
// const input2 = prompt("Введіть zrscm lfys")

// console.log('input :>> ', input);
// console.log('input2 :>> ', input2);


// alert(input2)




// const value = 5;

// if (true) {
//   // console.log("Block scope: ", value); // 5
//   const value = 15;
//   console.log("Block scope: ", value)  // 15

// }

// console.log("Global scope: ", value); // 5


// const  a = 30;

// if (true) {
//   const b = 100;
// console.log('b :>> ', b);
// console.log('a :>> ', a);
// }

// console.log('a :>> ', a);
// console.log('b :>> ', b);



const global = "global";


if (true) {
  const blockA = "block A";

  // console.log(global); // global
  // console.log(blockA); // block A
  // console.log(blockB); // помилка
  // console.log(blockC); // помилка

  if (true) {
    const blockB = "block B";

    // console.log(global); // global
    // console.log(blockA);  // block A
    // console.log(blockB); // block B
    // console.log(blockC); // помилка
  }
}

if (true) {
  const blockC = "block C";

  
  // console.log(global); // global
  // console.log(blockC); // block C
  // console.log(blockA); // помилка
  // console.log(blockB); // помилка
}



// console.log(global); // global
// console.log(blockA); // помилка
// console.log(blockB); // помилка
// console.log(blockC); // помилка




const b = 10;


if (true) {
    const a = 5;
    console.log(a);
    console.log(b);
}
console.log(a);


if (true) {
  const b = 10;


  console.log(a);
  console.log(b);
}

console.log(b);
