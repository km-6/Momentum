const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input[type=text]");
let toDoCategoryValue; 
const toDoCategory = toDoForm.querySelectorAll("input[name='category']");
const toDoMemo = toDoForm.querySelector("textarea");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e){
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)) 
    saveToDos()
}

function paintTodo (newTodo){  
    const li = document.createElement("li");
    li.id = newTodo.id;
    const TodoCate = document.createElement("span")
    const TodoText = document.createElement("p")
    const TodoMemo = document.createElement("div")
    if (TodoCate === "undefined"){
    }else{
        li.appendChild(TodoCate);
    };
    li.appendChild(TodoText);
    if (newTodo.memo === ""){
    }else{
        li.appendChild(TodoMemo);
    };
    const delButton = document.createElement("button"); 
    delButton.innerText = "X";
    li.appendChild(delButton);
    delButton.addEventListener("click", deleteTodo);
    TodoCate.innerText = newTodo.category;
    TodoText.innerText = newTodo.text;
    TodoMemo.innerText = newTodo.memo;
    if (TodoCate.innerText === "undefined"){
        TodoCate.classList.add(HIDDEN_CLASSNAME);
    }
    toDoList.appendChild(li);
}

toDoCategory.forEach(radio => {
    radio.addEventListener('click', function () {
      toDoCategoryValue = radio.value;
    });
}); 
function hadleToDosubmit(e){
    e.preventDefault(); 
    const newTodo = toDoInput.value;
    const newMemo = toDoMemo.value;
    const newTodoCate = toDoCategoryValue;
    toDoInput.value = "";
    toDoCategory.value = "";
    toDoMemo.value = "";
    const newTodoObj = { 
        text: newTodo,
        category: newTodoCate,
        memo: newMemo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", hadleToDosubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
   const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; 
   parsedToDos.forEach(paintTodo); 
}
