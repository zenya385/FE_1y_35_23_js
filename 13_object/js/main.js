//5 ======================================= Object створення ===================================

// {}  - літера об'єкту

// const object = {}

const hotel = {
  name: "Resort Hotel",
  stars: 5,
  "capacity qwert": 100,
};

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  },
  {
    title: "The Last Kingdom1",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  },
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  },
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: true,
    rating: 8.38,
  },
];

// console.log(hotel);

//5 ======================================= Доступ до властивостей ==================================

//2 object.key - через крапку.
//2 object ["key"] - через квадратні дужки з ім'ям ключа в лапках.

book.rating = 15;
book["author"] = "Dima";
book.page = 500;
book.page = 360;

// console.log(hotel.name);
// console.log(hotel.stars);
// console.log(book.title);
// console.log(book.genres[0]);
// console.log(book.author);
// console.log(book['author']);

//5 ======================================= Видалення властивостей ==================================

delete book.page;

// console.log(book.page);

//5 ======================================= Обчислювальні властивост ==================================

const propName = "name";
const user = {
  age: 25,
  // Ім'я цієї властивості буде взяте зі значення змінної propName
  [propName]: "Генрі Сибола",
};

// console.log(user.name); // 'Генрі Сибола'

//5 ======================================= Методи об'єкта ==================================

//2 Об'єкти можуть зберігати не тільки дані, але і функції для роботи з цими даними - методи. Якщо значення властивості - це функція, така властивість називається методом об'єкта.

// ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//     books: ["The Last Kingdom", "Dream Guardian"],
//     // Це метод об'єкта
//     getBooks() {
//       console.log("Цей метод буде повертати всі книги - властивість books");
//     },
//     // Це метод об'єкта
//     addBook(bookName) {
//       console.log(`Цей метод буде додавати нову книгу ${bookName} у властивість books`);
//     },
//   };

// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     const books = this.books;
//     for (const element of books) {
//       console.log(element);
//     }
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     bookShelf.books.push(bookName)
//   },
// };

// Виклики методів
// bookShelf.addBook("Нова книга");
// bookShelf.addBook("Нова книга2");
// bookShelf.addBook("Нова книга3");
// bookShelf.getBooks();

//   array.push()

// console.log("bookShelf :>> ", bookShelf);





const bookShelf = {
    books: ["The Last Kingdom"],
    getBooks() {
      return this.books;
    },
    addBook(bookName) {
      this.books.push(bookName);
    },
    removeBook(bookName) {
      const bookIndex = this.books.indexOf(bookName);
      console.log('this.books.splice(bookIndex, 1); :>> ', this.books.splice(bookIndex, 1));
    },
  };
  
//   console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
//   bookShelf.addBook("The Mist");
//   bookShelf.addBook("Dream Guardian");
//   console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
//   bookShelf.removeBook("The Mist");
//   console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']






  const car = {
    brand: 'Toyta',
    model: 'Camri',
    year: '2020',
    color: 'black',
    price: 0,           //1 відповідно ми створюємо таку властивість і вказуємо початкове значення 0, далі ми будемо його змінювати.
    changeColor(newColor) {
        this.color = newColor;
    },
    // addPrice(price) {   //1   у даному методі не зберігається ціна, вона просто повертається. відповідно у нас повернеться undefined
    //     this[price] = price; 
    //     return this[price]
    // },
    changePrice(newPrice) {   //1 дав метод changePrice так як по суті ми не добавляємо а змінюємо ціну
        this.price = newPrice;
    },
    getInfo() {
        return `Автомобiль: ${this.brand}, рiк: ${this.year}, колiр: ${this.color}, модель: ${this.model} цiна: ${this.price}`;
    },
}


// car.changeColor('yellow');
// car.changePrice(300);

// console.log(car.getInfo());



//3   ========================================================= ЗАВДАННЯ =======================================
//7   Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:
//7   imgUrl - фотографія, значення ""https://via.placeholder.com/640x480"";
//7   descr - опис, значення ""Spacious apartment in the city center"";
//7   rating - рейтинг, значення 4;
//7   price - ціна, значення 2153;
//7   tags - метаінформація, масив [""premium"", ""promoted"", ""top""].

//7   Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника. Додай йому наступні властивості:
//7   name - ім'я власника, значення ""Henry"";
//7   phone - телефон, значення ""982-126-1588"";
//7   email - пошта, значення ""henry.carter@aptmail.com"".

//3   ========================================================= рішення =======================================

const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner:{
        name: "Henry",
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com"
    }
}

//3   ========================================================= ЗАВДАННЯ =======================================
//6. Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
//7   aptRating - рейтинг;
//7   aptDescr - опис;
//7   aptPrice - ціна;
//7   aptTags - теги.

//4   ========================================================= рішення =======================================
const artRaiting = apartment.rating;
const aptDescr = apartment.descr;
const artPrice = apartment.price;
const artTags = apartment.tags;

//3   ========================================================= ЗАВДАННЯ =======================================
//6 Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
//7  ownerName - ім'я власника;
//7  ownerPhone - телефон власника;
//7  ownerEmail - пошта власника;
//7  numberOfTags - кількість елементів масиву у властивості tags;
//7  firstTag - перший елемент масиву у властивості tags;
//7  lastTag - останній елемент масиву у властивості tags.
//7  Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис «квадратних дужок».

//4   ========================================================= рішення =======================================
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
const [first, second, ...other] = apartment.tags;

//3   ========================================================= ЗАВДАННЯ =======================================
//7 ціну у властивості price на 5000;
//7 рейтинг квартири у властивості rating на 4.7;
//7 ім'я власника у вкладеній властивості name на ""Henry Sibola"";
//7 масив тегів у властивості tags, додавши в кінець рядок ""trusted"".
//7 Додай об'єкту apartment кілька нових властивостей:
//7 area - площа в квадратних метрах, число 60;
//7 rooms - кількість кімнат, число 3;
//7 location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
//7 country - країна, рядок ""Jamaica"";
//7 city - місто, рядок ""Kingston""."

//4   ========================================================= рішення =======================================
apartment.price += 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
    country: "Jamaica",
    city: "Kingston"
};


console.log(apartment);











// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.
// 7. Доповни код, оновивши значення властивостей об'єкта apartment:

