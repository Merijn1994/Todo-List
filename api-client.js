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

const deleteTask = async () => {
    const array = await getTasks();
    const settings = {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    };
    try {
        const response = await fetch(`http://localhost:3000/${smth}`, settings);
        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.log(error);        
    }
}