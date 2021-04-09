document.addEventListener("DOMContentLoaded", () => {
});

let theForm = document.querySelector("#create-task-form")
let taskList = document.querySelector("#tasks")

theForm.addEventListener("submit", function(event) {
  event.preventDefault()
  let userInput = event.target["new-task-description"].value
  let newTask = document.createElement("li")
  newTask.innerText = userInput
  taskList.appendChild(newTask)
})