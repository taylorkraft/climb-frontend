document.addEventListener("DOMContentLoaded", () => {
  usersForm()
  fetchUsers()
  //upon page load and every refresh my users are displayed as well as my form
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
      // renderUser is an instance method from User class
      // called on the new user object(u)
    }
  })
}
  //our rails backend sends the users as an array (index method)
  //our frontend receives the array, the for loop iterates over the collection


  function usersForm() {
    let uForm = document.getElementById("users-form")

    uForm.innerHTML += 
    `
    <form>
      <label>Name: </label>
      <input type="text" id="name">
      <input type="submit" value="Create User">
    </form>
    `
  }
