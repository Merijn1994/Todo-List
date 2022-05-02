// Declare constants

const toDoList = document.getElementById("todo-list");

// Show the initial list

const createToDoList = async () => {
    const tasks = await getTasks();
    tasks.forEach(task => {
        const checkbox = document.createElement("input");
        checkbox.type="checkbox";
        checkbox.classList.add("checkbox");

        const taskLi = document.createElement("li");
        const taskText = document.createTextNode(task.description);

        const removeButtonIcon = document.createElement("i");
        removeButtonIcon.classList.add("fa-solid");
        removeButtonIcon.classList.add("fa-trash-can");

        toDoList.appendChild(taskLi);
        taskLi.appendChild(checkbox);
        taskLi.appendChild(taskText);
        taskLi.appendChild(removeButtonIcon);
    });
}

createToDoList();

// add new task to the list

const addTaskToList = async() => {
    postTask();
    const tasks = await getTasks();
    const taskToAd = tasks[tasks.length - 1];

    const checkbox = document.createElement("input");
    checkbox.type="checkbox";
    checkbox.classList.add("checkbox");

    const taskLi = document.createElement("li");
    const taskText = document.createTextNode(taskToAd.description);

    const removeButtonIcon = document.createElement("i");
    removeButtonIcon.classList.add("fa-solid");
    removeButtonIcon.classList.add("fa-trash-can");

    toDoList.appendChild(taskLi);
    taskLi.appendChild(checkbox);
    taskLi.appendChild(taskText);
    taskLi.appendChild(removeButtonIcon);

    document.getElementById("todo-item").value='';
}

// remove task from the list

const removeTaskFromList = async event => {
    const tasks = await getTasks();
           
}


// event listener to add a task

const addTaskButton = document.getElementById("add-task");
addTaskButton.addEventListener("click", addTaskToList);

// event listener to delete a task

const addEventListenerRemoveTask = () => {
    const trashIcons = document.getElementsByClassName('fa-solid');
    Array.from(trashIcons).forEach(icon => {
        icon.addEventListener("toggle", removeTaskFromList)
    });
};

setTimeout(addEventListenerRemoveTask, 1000);

// event listener to check a task
