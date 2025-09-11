// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     console.log("response :>> ", response);
//     return response.json();
//   })
//   .then((data) => {
//     // Data handling
//     console.log("data :>> ", data);
//   })
//   .catch((error) => {
//     // Error handling
//   });
//4 =================== Помилка новачка =================
// let globalVariable; // undefined

// // Initializing data fetching
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => {
//     console.log("users inside then callback: ", users);

//     // Writing the result to a global variable
//     globalVariable = users;

//     // Everything is ok here, the data is in the variable
//     console.log("globalVariable inside fetch callback: ", globalVariable);
//   });

// // No async data here
// console.log("globalVariable outside fetch: ", globalVariable); // undefined

// =========================== об'єкт options =====================================

// fetch(url, options);

const newUserData = {
  name: "Roman Zeno",
  email: "Zeno@gmail.com",
  company: "GoITeens",
};

const options = {
  method: "POST", //GET PUT PUCH DELETE
  headers: { "Content-type": "application/json; charset=UTF-8" },
  body: JSON.stringify(newUserData),
};

// console.log("newUserData :>> ", newUserData);
// console.log("optons stringify  :>> ", optons.body);

// ================================================================
const fetchUsersBtn = document.querySelector(".btn");
const userList = document.querySelector(".user-list");

fetchUsersBtn.addEventListener("click", () => {
  fetchUsers()
    // .then((users) => console.log("users :>> ", users))
    .then((users) => renderUsers(users))
    .catch((error) => console.log(error));
});

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users", options).then(
    (response) => {
      console.log("response :>> ", response);
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function renderUsers(users) {
  // const markup = users
  //   .map((user) => {
  //     return `<li>
  //         <p><b>Name</b>: ${user.name}</p>
  //         <p><b>Email</b>: ${user.email}</p>
  //         <p><b>Company</b>: ${user.company.name}</p>
  //       </li>`;
  //   })
  //   .join("");
  const markup = `<li>
           <p><b>Name</b>: ${users.name}</p>
           <p><b>Email</b>: ${users.email}</p>
           <p><b>Company</b>: ${users.company}</p>
         </li>`;
  userList.insertAdjacentHTML("beforeend", markup);
}
