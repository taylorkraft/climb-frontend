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
      // users.map(user => {
      // let u = new User(user.name)
      // u.renderUser()
      for (const user of users){
      let u = new User(user.id, user.name)
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
    uForm.addEventListener("submit", submitForm)
    //listens for submit event, takes a callback
  }

  function submitForm() {
    event.preventDefault()
    let name = document.getElementById("name").value
    // the elements in my user form were given ids
    //value gives the actual value of the input
    
    let user = {
      name: name
    }
    //creating my json object

    fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(user)
      //everything shared over the internet is shared as a string
      //right now my user is a json object so i need to stringify
  })
  .then(res => res.json())
  .then(user => {
    let u = new User(user.id, user.name)
    u.renderUser()
  })
}

let deleteButtons = document.getElementsByClassName("delete")
// console.log(deleteButtons)
//this returns a node list we can iterate through
for (const button of deleteButtons){
  button.addEventListener("click", () => {
    
  })
}