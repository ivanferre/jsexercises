let ul = document.querySelector("ul");

if (localStorage.getItem("todos")) {
    displayData();
} else {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
        .then((response) => response.json())
        .then((json) => localStorage.setItem("todos", JSON.stringify(json)))
    .then(()=>displayData())
}

function displayData() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    console.log(todos);
    const sortedList = todos.sort();
    console.log(sortedList);

    for (const todo of sortedList) {
        const li = document.createElement("li");
        li.textContent = todo.title;
        ul.appendChild(li);
    }
}