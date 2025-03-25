const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};

// console.log(getWage(baseSalary, overtime, rate));

//5 ======================== Об'єктноорієнтоване програмування (ООП) ========================

const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

// console.log(employee.getWage());

//5 ======================== Прототип об'єкта ========================

const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.hasOwnProperty('name'))
// console.log(dog.hasOwnProperty('legs'))

// for (const key in dog) {
//     console.log('key :>> ', key);
// }

//5 ======================== Class ========================

// class User {
//       // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #mail;

//   constructor({ name, mail }) {
//     this.name = name;
//     this.#mail = mail;
//   }

//   getMail(){
//     // console.log('this.name :>> ', this.name);
//     return this.#mail
//   }

//   changeMail(newMail){
//   this.#mail = newMail
//   }

// }

// const mango = new User({
//   name: "Mango",
//   mail: "mango@mail.com",
// });
// console.log("mango :>> ", mango);


// const poly = new User({ 
//     name: "Poly",
//     mail: "poly@mail.com" });
// // console.log("poly :>> ", poly);

// console.log(mango.getMail());

// console.log(poly.changeMail('mangoqwertyu@mail.com'));

// poly.changeMail('mangoqwertyu@mail.com')
// console.log('poly :>> ', poly);



//6 =============================== Геттери і сеттери =================================



// class User {
//     // Необов'язкове оголошення публічних властивостей
//     name;
//     // Обов'язкове оголошення приватних властивостей
//     #mail;
    
//     constructor({ name, mail }) {
//         this.name = name;
//         this.#mail = mail;
//     }
    
//     // Геттер email
//     get mail(){
//         // console.log('this.name :>> ', this.name);
//         return this.#mail
//     }
    
//     // Сеттер email
//     set mail(newMail){
//         this.#mail = newMail
//     }
    
// }


// const mango = new User({ name: "Манго", mail: "mango@mail.com" });
// console.log(mango.mail); // mango@mail.com
// mango.mail = "mango@supermail.com";
// console.log(mango.mail); // mango@supermail.com




//6 =============================== Статичні властивості =================================

// class User {
// static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
// }


//     // Необов'язкове оголошення публічних властивостей
//     name;
//     // Обов'язкове оголошення приватних властивостей
//     #mail;
//     #role;
    
//     constructor({ name, mail, role }) {
//         this.name = name;
//         this.#mail = mail;
//         this.#role = role;
//     }
    
//     // Геттер email
//     get role(){
//         // console.log('this.name :>> ', this.name);
//         // return this.#mail
//         return this.#role
//     }
    
//     // Сеттер email
//     set role(newRole){
//         // this.#mail = newMail
//         this.#role = newRole
//     }
    
// }


// const mango = new User({ name: "Манго", mail: "mango@mail.com", role: User.Roles.ADMIN });

// console.log(mango.Roles); // undefined
// console.log(User.Roles.ADMIN); //  "admin"
// console.log(User.Roles);

// console.log(mango.role)

// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"



//6 ======================================= Статичні методи =========================================


// class User {
//     // static Roles = {
//     //     ADMIN: "admin",
//     //     EDITOR: "editor",
//     // }

//     static #takenMails = [];

//     static isEmailTaken(mail) {
//         return User.#takenMails.includes(mail);
//     }
    
//         // Обов'язкове оголошення приватних властивостей
//         #mail;
     
        
//         constructor({ mail}) {
//             this.#mail = mail;
//             User.#takenMails.push(mail);
//         }
         
//     } 
    
    
//     const mango = new User({ mail: "mango@mail.com"});


//     console.log(User.isEmailTaken("poly@mail.com"));
//     console.log(User.isEmailTaken("mango@mail.com"));
    

//6 ======================================= Наслідування класів =========================================


// class Child extends Parent {

// }

class User {
    #email;
  
    constructor(email) {
      this.#email = email;
    }
  
    get email() {
      return this.#email;
    }
  
    set email(newEmail) {
      this.#email = newEmail;
    }
  }
  
  class ContentEditor extends User {
    constructor({ email, posts }) {
        super(email);
        this.posts = posts;
      }
    
      addPost(post) {
        this.posts.push(post);
      }
  }
  
  const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
  console.log(editor); // { email: 'mango@mail.com', posts: [] }
  console.log(editor.email); // 'mango@mail.com'
  editor.addPost("post-1");
  console.log(editor.posts); // ['post-1']