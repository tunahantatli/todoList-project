//choose item

const form = document.querySelector("#addTaskForm");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

eventListeners()
function eventListeners(){
    //submit event
    form.addEventListener("submit",addNewItem);
    //delete ann item
    taskList.addEventListener("click",deleteItem);
}

function addNewItem(e){
    if(input.value===''){
        alert("opps! add new item")
        console.log("submit");

    }
    // create li
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value));
    //create a
    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href","#");
    a.innerHTML = '<i class="fas fa-times"></i>'; 

    // add created elements to list
    li.appendChild(a);
    taskList.appendChild(li);


    input.value ="";

    e.preventDefault();
}

//delete ann elements
function deleteItem(e){
    if(e.target.className==="fas fa-times"){
        console.log(e.target);
    }
}