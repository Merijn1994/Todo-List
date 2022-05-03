const postTask = async () => {
    let task = document.getElementById("todo-item").value;
    const addTask = {description: task, done: false};
    const settings = {
        method: 'POST',
        body: JSON.stringify(addTask),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    try {
        const response = await fetch("http://localhost:3000/", settings);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);        
    }
}

const getTasks = async () => {
    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    try {
        const response = await fetch("http://localhost:3000/", settings);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);        
    }
}

const deleteTask = async listId => {
    const array = await getTasks();
    const settings = {
        method: 'DELETE'
    };
    try {
        const response = await fetch(`http://localhost:3000/${listId}`, settings);
        const data = await response.json();
        return (data);
        
    } catch (error) {
        console.log(error);        
    }
}

const putTaskDone = async listId => {
    const putTask = {done: true};
    const settings = {
        method: 'PUT',
        body: JSON.stringify(putTask),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    try {
        const response = await fetch(`http://localhost:3000/${listId}`, settings);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);        
    }
}

const putTaskDescription = async listId => {
    let update = prompt("Change your task:")
    const putTask = {description: update};
    const settings = {
        method: 'PUT',
        body: JSON.stringify(putTask),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    try {
        const response = await fetch(`http://localhost:3000/${listId}`, settings);
        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log(error);        
    }
}