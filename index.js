document.addEventListener("DOMContentLoaded", () => {
  fetchUsers()
})

const BASE_URL = "http://127.0.0.1:3000"

function fetchUsers(){
  fetch(`${BASE_URL}/users`)
  .then(res => console.log(res.json()))
  .then()
}