const fullname = document.querySelector('#name');
const email = document.querySelector('#email');
const comment = document.querySelector('#comment');

function updateStorage() {
  localStorage.setItem(
    'userDetails',
    JSON.stringify({
      name: fullname.value,
      email: email.value,
      message: comment.value,
    }),
  );
}

// Add populate input field function

fullname.oninput = updateStorage;
email.oninput = updateStorage;
comment.oninput = updateStorage;

function populateInput() {
  const retrievedItem = JSON.parse(localStorage.getItem('userDetails'));
  fullname.value = retrievedItem.name;
  email.value = retrievedItem.email;
  comment.value = retrievedItem.message;
}

if (localStorage.getItem('userDetails')) {
  populateInput();
}
