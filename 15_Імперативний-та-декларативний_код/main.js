

//6 ======================= імперативний підхід =========================

// Імперативний підхід
// const numbers = [10, 20, 30, 40, 50];
// const filteredNumbers = [];


// for(let i = 0; i < numbers.length; i+=1){
//     // console.log(numbers[i]);
// if(numbers[i] > 20){
//     filteredNumbers.push(numbers[i]) 
// }
// }

// console.log('filteredNumbers :>> ', filteredNumbers);



// Декларативний підхід
// const numbers = [10, 20, 30, 40, 50];

// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]


// const filteredNum = numbers.filter( function filtered (value){
//     return value > 20
// } )

// const filteredNum = numbers.filter((value)=>{
//     return value > 20
// } )

// const filteredNum = numbers.filter((value)=> value > 20 )

// console.log(filteredNum);



// ==================== грязні функції ==========================
// const numbers = [1, 2, 3, 4, 5];


// const dirtyMultiply = (array, value) => {
//     for (let i = 0; i < array.length; i += 1) {

//       array[i] = array[i] * value;
    
//     }
//   }; 
 
//   dirtyMultiply(numbers, 2);
 
//   // Відбулася мутація вихідних Даних
//   console.log(numbers); // [2, 4, 6, 8, 10]


  // ==================== чисті функції ==========================


  const numbers = [1, 2, 3, 4, 5];
  const result = [];


const pureMultiply = (array, value) => {
    for (let i = 0; i < array.length; i += 1) {
   result.push(array[i] * value)
    }
    return result
  }; 
 
  pureMultiply(numbers, 2);
 
  // Відбулася мутація вихідних Даних
  console.log(numbers); // [2, 4, 6, 8, 10]
  console.log(result)






  //6 ==================== method filter ==========================

  const values = [51, -3, 27, 21, -68, 42, -37, 0];

  const positiveValues = values.filter(value => value >= 0);
  console.log(positiveValues); // [51, 27, 21, 42]
  
  const negativeValues = values.filter(value => value < 0);
  console.log(negativeValues); // [-3, -68, -37]
  
  const bigValues = values.filter(value => value > 1000);
  console.log(bigValues); // []
  
  // Оригінальний масив не змінився
  console.log(values); // [51, -3, 27, 21, -68, 42, -37]