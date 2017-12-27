//Define User Interface Variables
const form = document.querySelector(".task-form");
const taskList = document.querySelector(".collection");
const clearButton = document.querySelector("clear-tasks");
const filter = document.querySelector(".filter");
const taskInput = document.querySelector(".task");

//Load all event listeners
loadEventListeners();//Listing all event listeners outside of function would give them global scope

//Load all event loadEventListeners
function loadEventListeners() {
    //Add task loadEventListeners
    form.addEventListener("submit", addTask);
}

//add tasks
function addTask(e) {//If a task hasn't been entered, asks user to input one.
    if(taskInput.value === "") {
        alert("Please add a task.");
    }

    //Create li element
    const li = document.createElement("li");

    //Adds a class to li element
    li.className = "collection-item";
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //append the link to li
    li.appendChild(link);
    //append li to ul
    taskList.appendChild(li);
    //clear input once user inputs task
    taskInput.value = "";


    e.preventDefault();//prevents the default behavior that each element has
}
