class User {
  constructor(name) {
    this.name = name
  }

  //it is the responsibility of the user class to render each user instance

  renderUser() {
    let usersDiv = document.getElementById("users-container")
    
    usersDiv.innerHTML +=
    `
    <ul>
      <h3><label>Name: </label>${this.name}</h3> 
    </ul>
    `
  }
}