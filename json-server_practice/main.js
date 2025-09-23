// const options = {
//   method: "POST",
//   body: JSON.stringify(postToAdd),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

// fetch("http://http://localhost:3000/students", options)
//   .then((response) => response.json())
//   .then((post) => console.log(post))
//   .catch((error) => console.log(error));

// fetch("http://localhost:3000/students")
//   .then((response) => response.json())
//   .then((post) => console.log(post))
//   .catch((error) => console.log(error));

fetch("http://localhost:3000/students")
  .then((response) => response.json())
  .then((data) => {
    const list = document.querySelector("#studetns-list");

    const item = data
      .map(({ name, age }) => {
        console.log("name :>> ", name);
        return `<li>${name}(вік: ${age})</li>`;
      })
      .join("");
    list.insertAdjacentHTML("beforeend", item);
  })
  .catch((error) => console.log(error));

//6================================= добавити студента
function addStudent(name, age) {
  const options = {
    method: "POST",
    body: JSON.stringify({ name, age }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  return fetch("http://localhost:3000/students", options).then((response) => {
    console.log("response :>> ", response);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

// addStudent("Максим", 15).then((newStudent) => {
//   console.log("Новий студен доданий :>> ", newStudent);
// });

//6================================= оновити студента

function uppdateStudent(id, newData) {
  const options = {
    method: "PATCH", //PUT
    body: JSON.stringify(newData),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  return fetch(`http://localhost:3000/students/${id}`, options).then(
    (response) => {
      console.log("response :>> ", response);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }
  );
}

// uppdateStudent(1, { name: "Анет", age: 12 }).then((updateSt) => {
//   console.log("Студент оновлений :>> ", updateSt);
// });

//  6 ======================  delete student

function deleteStudent(id) {
  const options = {
    method: "DELETE", //PUT
  };

  return fetch(`http://localhost:3000/students/${id}`, options).then(
    (response) => {
      console.log("response :>> ", response);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }
  );
}

deleteStudent(2).then(() => {
  console.log("Студента видалено ✅:>> ");
});
