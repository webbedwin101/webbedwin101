const mydiv = document.querySelector('p');
mydiv.addEventListener('click', updateName);

function updateName() {
    const name = prompt('Enter a new name');
    mydiv.textContent = `${name}'s Tasks:`;
}

const todoInput  = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList   = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)

function addTodo(event) {
    console.log("hello");
    //Prevent form from submitting
    event.preventDefault();
    //Creates the main Todo Div 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI in the todo div
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value; //grabs the input value 
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //creates a checked Button in the todo div
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //creates a Trash Button  in the todo div  
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Append the Todo div to the unordered List
    todoList.appendChild(todoDiv);
    //Clear todo Input Value
    todoInput.value = "";
}

function deleteCheck(e) {//can click on different items for different functionality 
    console.log(e.target);
    const item = e.target; //grab the item we are clicking on
    //Delete Todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement; //removes the parent element
        //Animation 
        todo.classList.add('fall');
        //waits for animation to end then removes the element
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
    //Check Mark
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement; //toggles class to show complete
        todo.classList.toggle('completed');
    }
}