//Define User Interface Variables
const form = document.querySelector(".task-form");
const taskList = document.querySelector(".collection");
const clearButton = document.querySelector(".clear-tasks");
const filter = document.querySelector(".filter");
const taskInput = document.querySelector(".task");


loadEventListeners();//Listing all event listeners outside of function would give them global scope

//Load all event loadEventListeners
function loadEventListeners() {
    //DOM Load event
    document.addEventListener("DOMContentLoaded", getTasks);//The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
    //Attaches event listener to form.
    form.addEventListener("submit", addTask);//The submit event is fired when a form is submitted.
    //attaches event listener to taskList
    taskList.addEventListener("click", removeTask);
    //attaches event listener to clear tasks button
    clearButton.addEventListener("click", clearTasks);
    //filter tasks event
    filter.addEventListener("keyup", filterTasks);
}

//Get Tasks from LS
function getTasks () {
    let tasks;
    if(localStorage.getItem("tasks" === null )){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach(function(task){
        //Create li element
        const li = document.createElement("li");

        //Adds a class to li element
        li.className = "collection-item";
        //Create text node and append to li
        li.appendChild(document.createTextNode(task));
        //Create new link element
        const link = document.createElement("a");
        link.className = "delete-item secondary-content";
        link.innerHTML = '<i class="fa fa-remove"></i>';
        //append the link to li
        li.appendChild(link);

        //append li to ul
        taskList.appendChild(li);
        });
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

    //Store in Local storage
    storeTaskInLocalStorage(taskInput.value);

    //clear input once user inputs task
    taskInput.value = "";


    e.preventDefault();//prevents the default behavior that each element has
}

// Store Task
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem("tasks" === null )){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


//remove tasks
function removeTask(e) {
    if (e.target.parentElement.classList.contains("delete-item")){//displays the child element that triggered the event ONLY IF its parent element contains delete-item as one of its classes
        if(confirm("Are you sure you wish to delete this element?")){
            e.target.parentElement.parentElement.remove();//the first parentElement brings you to the a tag. The next one brings you to the li

            //Remove from LS
            removeTaskfromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

//Remove from local localStorage
function removeTaskfromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem("tasks" === null )){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Clears taskList
function clearTasks() {
    while (taskList.firstChild) {//
        taskList.removeChild(taskList.firstChild);
    }

    //Clear from Local Storage
    clearTasksFromLocalStorage();
}

//Clear Tasks from Local storage
function clearTasksFromLocalStorage(){
    localStorage.clear();
}

//Allows user to search for tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach(
        function(task){
            const item = task.firstChild.textContent;//textContent property sets or returns the textual content of the specified node, and all its descendants.
            if(item.toLowerCase().indexOf(text) != -1){ // -1 means no match
                task.style.display = "block";
            }
            else{
                task.style.display = "none";
            }
        }
    );
}
