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

    const completed = todos
        .filter((item) => (item.completed == true))
        .map((item) => item.title)
        .sort();
    const uncompleted = todos
        .filter((item) => (item.completed == false))
        .map((item) => item.title)
        .sort();

    const titleList = todos.map((item) => item.title);
    const sortedList = titleList.sort();
    console.log(sortedList);

    for (const todo of uncompleted) {
        const li = document.createElement("li");
        li.textContent = todo;
        ul.appendChild(li);
    }
    for (const todo of completed) {
        const li = document.createElement("li");
        li.textContent = todo;
        li.classList = "completed";
        ul.appendChild(li);
    }
}