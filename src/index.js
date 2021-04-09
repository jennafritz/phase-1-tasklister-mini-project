document.addEventListener("DOMContentLoaded", () => {
});

let theForm = document.querySelector("#create-task-form")
let taskList = document.querySelector("#tasks")

theForm.addEventListener("submit", function(event) {
  event.preventDefault()
    
  let userInput = event.target["new-task-description"].value
  let newTask = document.createElement("li")
  let deleteButton = document.createElement("button")
  let priorityList = document.createElement("select")
  let priorityOptionHigh = document.createElement("option")
  let priorityOptionMedium = document.createElement("option")
  let priorityOptionLow = document.createElement("option")
    priorityOptionHigh.innerText = "High"
    priorityOptionMedium.innerText = "Medium"
    priorityOptionLow.innerText = "Low"
    deleteButton.innerText = "x"
    newTask.innerText = userInput
    taskList.appendChild(newTask)
    newTask.appendChild(deleteButton)
    deleteButton.addEventListener("click", function(){
    newTask.remove()
  })
  
})