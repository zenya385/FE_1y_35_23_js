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

addPost.addEventListener("click", handlerAddPost);

function handlerAddPost() {
  wrapperForm.innerHTML = `<form action="submit" class="js-form-add">
  <input type="text" name="name" />
  <textarea name="decription" cols="30" rows="10"></textarea>
  <button>Добавити пост</button>
</form>`;
  const form = document.querySelector(".js-add");
  form.addEventListener("submit", handlerFormSubmit);
}

function handlerFormSubmit(evt) {
  evt.preventDefault();
  console.log("evt.currentTarget.elements :>> ", evt.currentTarget.elements);
  const dataPost = {
    title: name.value,
    body: decription.value,
  };

  addPostFetch(dataPost).then((obj) => {
    console.log("obj :>> ", obj);
  });
  //   console.log("evt :>> ", evt);
}

function addPostFetch(data) {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json;",
    },
  };

  return fetch("https://jsonplaceholder.typicode.com/posts", options).then(
    (response) => {
      //   console.log("response :>> ", response);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }
  );
}
