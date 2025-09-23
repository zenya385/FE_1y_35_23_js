//6 Create - POST ================================================
// const postToAdd = {
//   author: "Mango",
//   body: "CRUD is awesome",
// };

// const options = {
//   method: "POST",
//   body: JSON.stringify(postToAdd),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

// fetch("https://jsonplaceholder.typicode.com/posts", options)
//   .then((response) => response.json())
//   .then((post) => console.log(post))
//   .catch((error) => console.log(error));

//6 Read - читаннчя GET ===========================================

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((posts) => console.log(posts))
//   .catch((error) => console.log(error));

//6 Update - PUT / PATCH ==============================

// Change value of id property to update different post
// const postToUpdate = {
//   id: 1,
//   body: "CRUD is really awesome",
// };

// const options = {
//   method: "PATCH",
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
//   .then(response => response.json())
//   .then(post => console.log(post))
//     .catch(error => console.log("ERROR" + error));

//6 Delete - DELETE =================================

// const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//   method: "DELETE",
// })
//   .then(() => console.log("Post deleted"))
//   .catch((error) => console.log("Error:", error));

// ============================================================================

const addPost = document.querySelector(".js-add");
const listPost = document.querySelector(".js-posts");
const wrapperForm = document.querySelector(".js-form");
const messageError = document.querySelector(".js-error");

// console.log("addPost :>> ", addPost);

addPost.addEventListener("click", handlerAddPost);

function handlerAddPost() {
  wrapperForm.innerHTML = `<form action="submit" class="js-form-add">
  <input type="text" name="name" />
  <textarea name="decription" cols="30" rows="10"></textarea>
  <button>Добавити пост</button>
</form>`;
  const form = document.querySelector(".js-form-add");
  form.addEventListener("submit", handlerFormSubmit);
}

function handlerFormSubmit(evt) {
  evt.preventDefault(); //5 заборона перезавантажені сторінки при сабміті
  // console.log("evt.currentTarget.elements :>> ", evt.currentTarget);
  // console.dir(evt.currentTarget.elements);
  const { name, decription } = evt.currentTarget.elements;
  //   console.log("name.value :>> ", name.value);
  //   console.log("decription.value :>> ", decription.value);

  const dataPost = {
    title: name.value,
    body: decription.value,
  };

  addPostFetch(dataPost)
    .then((obj) => {
      listPost.insertAdjacentHTML("beforeend", createPostMarkup(obj));
      // console.log("obj :>> ", obj);
    })
    .catch(() => (messageError.innerHTML = "Не можливо добавити пост"))
    .finally(() => {
      wrapperForm.innerHTML = "";
      setInterval(() => {
        messageError.innerHTML = "";
      }, 4000);
    });
}

function createPostMarkup({ id, title, body }) {
  return `<li data-id="${id}">
        <h2>${title}</h2>
          <p>${body}</p>
      </li>`;
}

function addPostFetch(data) {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  return fetch("https://jsonplaceholder.typicode.com/posts", options).then(
    (response) => {
      console.log("response :>> ", response);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }
  );
}

// function name() {
//   console.log("ghbdsn :>> ");
// }
