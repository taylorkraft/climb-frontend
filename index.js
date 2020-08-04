document.addEventListener("DOMContentLoaded", () => {
  fetchUsers()
  //upon page load and every refresh my users are displayed
})

const BASE_URL = "http://127.0.0.1:3000"

function fetchUsers() {
  fetch(`${BASE_URL}/users`)
  .then(res => res.json())
  .then(users => {
    // manipulate the DOM here
    // user is the backend object received
    // u represents the newly created JS object
    for (const user of users){
      let u = new User(user.name)
      u.renderUser()
      // after creating new user object, we call the render method from the user class to render the user instance
    }
  })
}