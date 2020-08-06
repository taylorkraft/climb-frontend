document.addEventListener("DOMContentLoaded", () => {
  usersForm()
  fetchUsers()
  fetchMountains()
  mtnsForm()
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
      let u = new User(user.id, user.name)
      u.renderUser()
      // renderUser is an instance method from User class
      // called on the new user object(u)

      //our rails backend sends the users as an array (rails index)
      //our frontend receives the array, the for loop iterates over the collection
    }
  })
}

function fetchMountains() {
  fetch(`${BASE_URL}/mountains`)
  .then(res => res.json())
  .then(mountains => {
    // manipulate the DOM here
    // mtn is the backend object received
    // m represents the newly created JS object
      for (const mtn of mountains){
      let m = new Mountain(mtn.id, mtn.name, mtn.elevation)
      m.renderMountain()
      // renderMountain is an instance method from Mountain class
      // called on the new mountain object(m)

      //our rails backend sends the mountains as an array (rails index)
      //our frontend receives the array, the for loop iterates over the collection
    }
  })
}

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
    uForm.addEventListener("submit", submitUForm)
    //listens for submit event, takes a callback
  }

  function mtnsForm() {
    let mForm = document.getElementById("mountains-form")

    mForm.innerHTML += 
    `
    <form>
      <label>Name: </label>
      <input type="text" id="name">
      <label>Elevation: </label>
      <input type="text" id="elevation">
      <input type="submit" value="Create Mountain">
    </form>
    `
    mForm.addEventListener("submit", submitMForm)

  }

  function submitUForm() {
    event.preventDefault()
    let name = document.getElementById("name").value
    // the elements in my user form were given ids
    //value gives the actual value of the input
    //prevent default from submitting the form
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

function submitMForm() {
  event.preventDefault()
  let name = document.getElementById("name").value
  let elevation = document.getElementById("elevation").value
  // the elements in my mountain form were given ids
  //value gives the actual value of the input
  //prevent default from submitting the form
  let mountain = {
    name: name,
    elevation: elevation
  }
  //creating my json object

  fetch(`${BASE_URL}/mountains`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    body: JSON.stringify(mountain)
    //everything shared over the internet is shared as a string
    //right now my mountain is a json object so i need to stringify
})
.then(res => res.json())
.then(mtn => {
  let m = new Mountain(mtn.id, mtn.name, mtn.elevation)
  m.renderMountain()
})
}

// let deleteButtons = document.getElementsByClassName("delete")
// // console.log(deleteButtons)
// //this returns a node list we can iterate through
// for (const button of deleteButtons){
//   button.addEventListener("click", () => {
    
//   })
// }

function deleteUser() {
  let userId = parseInt(event.target.dataset.id)
  // event.target.dataset.id returns the id as a string, parseInt will turn it into an integer

  fetch(`${BASE_URL}/users/${userId}`, {
    method: "DELETE"
  })
  this.location.reload()
  //'this' refers to the window, so my user doesn't have to refresh the page
}

