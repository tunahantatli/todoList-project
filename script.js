//choose item

const form = document.querySelector("#addTaskForm");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let todos;

//load items
loadItems();

eventListeners();
function eventListeners() {
  //submit event
  form.addEventListener("submit", addNewItem);
  //delete ann item
  taskList.addEventListener("click", deleteItem);
}
//delete all item
btnDeleteAll.addEventListener("click", deleteAllitems);

function loadItems() {
  todos = getItemsFromLS();
  todos.forEach(function (item) {
    createItem(item);
  });
}
//get items from local storage
function getItemsFromLS() {
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}
//set ıtem to local stroge
function setItemToLS(newTodo) {
  todos = getItemsFromLS();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function createItem(newTodo) {
  // create li
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(newTodo));
  //create a
  const a = document.createElement("a");
  a.classList = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fas fa-times"></i>';

  // add created elements to list
  li.appendChild(a);
  taskList.appendChild(li);
}

function addNewItem(e) {
  if (input.value === "") {
    alert("opps! add new item");
    console.log("submit");
    return;
  }

  setItemToLS(input.value);
  createItem(input.value);
  input.value = "";

  e.preventDefault();
}

//delete ann elements
function deleteItem(e) {
  if (e.target.className === "fas fa-times") {
    if (confirm("Are you sure you want to delete?")) {
      // console.log(e.target);
      e.target.parentElement.parentElement.remove();
      deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
    }
  }
}
//delete todo items from local storage
function deleteTodoFromStorage(deletetodo) {
  let todos = getItemsFromLS();
  todos.forEach(function (todo, index) {
    if (todo === deletetodo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem(todos, JSON.stringify(todos));
}
//delete all items

function deleteAllitems(e) {
    if (confirm("Are you sure you want to delete all items?")) {
      while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
      }
      localStorage.clear();
      //taskList.innerHTML="";
    }
}
