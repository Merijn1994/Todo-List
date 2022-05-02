// Declare constants

const toDoList = document.getElementById("todo-list");

// Show the initial list

const createToDoList = async () => {
    const tasks = await getTasks();
    tasks.forEach(task => {
        const taskLi = document.createElement("li");
        const taskText = document.createTextNode(task.description);
        
        const checkbox = document.createElement("input");
        checkbox.type="checkbox";
        checkbox.classList.add("checkbox");

        const removeButtonIcon = document.createElement("i");
        removeButtonIcon.classList.add("fa-solid");
        removeButtonIcon.classList.add("fa-trash-can");

        toDoList.appendChild(taskLi);
        taskLi.appendChild(checkbox);
        taskLi.appendChild(taskText);
        taskLi.appendChild(removeButtonIcon);

        removeButtonIcon.addEventListener("click", () => {
            deleteTask(task._id);
        });

        checkbox.addEventListener("click", () => {
            putTaskDone(task._id);
        });

        taskText.addEventListener("click", event => {
            console.log(event);
            putTaskDescription(task._id);
        });
    });
}

createToDoList();

// add new task to the list

const addTaskToList = async() => {
    postTask();
    const tasks = await getTasks();
    const taskToAd = tasks[tasks.length - 1];

    const taskLi = document.createElement("li");
    const taskText = document.createTextNode(taskToAd.description);

    const checkbox = document.createElement("input");
    checkbox.type="checkbox";
    checkbox.classList.add("checkbox");

    const removeButtonIcon = document.createElement("i");
    removeButtonIcon.classList.add("fa-solid");
    removeButtonIcon.classList.add("fa-trash-can");

    toDoList.appendChild(taskLi);
    taskLi.appendChild(checkbox);
    taskLi.appendChild(taskText);
    taskLi.appendChild(removeButtonIcon);

    removeButtonIcon.addEventListener("click", () => {deleteTask(taskToAd._id)});
    checkbox.addEventListener("click", () => {putTask(taskToAd._id)});

    document.getElementById("todo-item").value='';
}

// event listener to add a task

const addTaskButton = document.getElementById("add-task");
addTaskButton.addEventListener("click", addTaskToList);

// remove task from the list

const removeTaskFromList = () => {
    const removeButtonIcons = Array.from(document.getElementsByClassName("fa-solid"));
    removeButtonIcons.forEach(button => {
        button.addEventListener("click", event => {
            event.path[1].remove();
        });
    });
}

setInterval(removeTaskFromList, 100);

// check task on the list

const checkTaskFromList = () => {
    const checkboxes = Array.from(document.getElementsByClassName("checkbox"));
    checkboxes.forEach(box => {
        box.addEventListener("click", event => {
            event.path[1].classList.add("mark-done");
        });
    });
}

setInterval(checkTaskFromList, 100);

const updateTaskInList = () => {
    const text = Array.from(document.getElementsByTagName("li"));
    text.forEach(li => {
        li.addEventListener("click", event => {
            console.log(event.target);
        });
    });
}

setTimeout(updateTaskInList, 1000);
