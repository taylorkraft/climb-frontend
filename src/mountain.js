class Mountain {
  constructor(id, name, elevation) {
    this.id = id 
    this.name = name
    this.elevation = elevation
  }

  renderMountain() {
    let mtnsDiv = document.getElementById("mountains-container")

    mtnsDiv.innerHTML +=
    `
    <ul>
      <li>${this.name}</li>
      <li>${this.elevation}</li>
      <button data-id=${this.id} onclick="deleteMountain()">Delete Mountain</button>
    </ul>
    `

  }
}