// Declare constants

const toDoList = document.getElementById("todo-list");

// Show the initial list

const createToDoList = async () => {
    const tasks = await getTasks();
    tasks.forEach(task => {
        const taskLi = document.createElement("li");
        const taskText = document.createTextNode(task.description);
        toDoList.appendChild(taskLi);
        taskLi.appendChild(taskText);
    });
}

createToDoList();

// add new task to the list

const addTaskToList = async() => {
    postTask();
    const tasks = await getTasks();
    const taskToAd = tasks[tasks.length - 1];
    const addTaskLi = document.createElement("li");
    const addTaskText = document.createTextNode(taskToAd.description);
    toDoList.appendChild(addTaskLi);
    addTaskLi.appendChild(addTaskText);
    document.getElementById("todo-item").value='';
}

// event listener to add the task

const addTaskButton = document.getElementById("add-task");
addTaskButton.addEventListener("click", addTaskToList);