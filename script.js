
// TODO: Select and store references to the necessary DOM elements:
// - todoList: the <ul> element to contain the todo items
// - todoInput: the input field for new todos
// - addButton: the button to add new todos
const todoList = document.getElementById ("todo-list");
const todoInput = document.getElementById ("todo-input");
const addButton = document.getElementById ("add-button");
let todos = [];


// Create todo item element
function createTodoElement(todo) {
    // TODO: Implement this function
    // 1. Create a new <li> element
    const li = document.createElement ("li");

    // 2. Add the 'todo-item' class to the <li>
    li.classList.add ("todo-item");

    // 3. Create a <span> for the todo text
    const span = document.createElement ("span");

    // 4. Set the span's text content to todo.text
    span.textContent = todo.text;

    // 5. Create a delete button
    const deleteButton = document.createElement ("button");
    deleteButton.textContent = "Delete";

    // 6. Add a click event listener to the delete button that calls deleteTodo(todo.id)
    deleteButton.addEventListener ("click", ()=> {
        deleteTodo (todo.id)
    });

    // 7. Append the span and delete button to the <li>
    li.appendChild (deleteButton);
    li.appendChild (span);

    // 8. Return the <li> element
    return li;
}

// Render todos
function renderTodos() {
    // TODO: Implement this function

    // 1. Clear the existing list
    todoList.innerHTML = "";

    // 2. Loop through the todos array
    // 3. For each todo, call createTodoElement(todo) and append the result to the todo list
    todos.forEach (todo => {
        const todoElement = createTodoElement (todo);
        todoList.appendChild (todoElement);
    });
}



// Add todo
function addTodo() {
    // TODO: Implement this function
    // 1. Get the text from the input field
    const text = todoInput.value;

    // 2. If the text is not empty:
    //    a. Create a new todo object with a unique id and the input text
    //    b. Add the new todo object to the todos array
    //    c. Clear the input field
    //    d. Call renderTodos() to update the display
    if (text !== "") {
        const newTodo = {
            id: Date.now (), text: text
        };
        todos.push (newTodo);
        todoInput.value = "";
        renderTodos ();
    }
}



// Delete todo
function deleteTodo(id) {
    // TODO: Implement this function
    // 1. Remove the todo with the given id from the todos array
    todos = todos.filter (todo => todo.id !== id);

    // 2. Call renderTodos() to update the display
    renderTodos ();
}

// TODO: Add a click event listener to the add button that calls addTodo
addButton.addEventListener ("click", addTodo);

// TODO: Add a keypress event listener to the input field 
// that calls addTodo when the Enter key is pressed
todoInput.addEventListener ("keypress", (event) => {
    if (event.key === "Enter") {
        addTodo ();
    }
});

// Initial render
renderTodos();