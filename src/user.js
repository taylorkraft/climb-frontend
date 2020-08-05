class User {
  constructor(id, name) {
    this.id = id
    this.name = name
  }

  //it is the responsibility of the user class to render each user instance

  renderUser() {
    let usersDiv = document.getElementById("users-container")
    
    usersDiv.innerHTML +=
    `
    <ul>
      <h4>${this.name}</h4>
      <button class="delete" data-id=${this.id}>Delete User</button>
    </ul>
    `
    //the data-id matches the object id so i can use that to make my request
  }
}