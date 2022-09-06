//choose item

const form = document.querySelector("#addTaskForm");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const items = ["Todo 1", "Todo 2","Todo 3","Todo 4"];

//load items
loadItems();

eventListeners();
function eventListeners(){
    //submit event
    form.addEventListener("submit",addNewItem);
    //delete ann item
    taskList.addEventListener("click",deleteItem);
}
//delete all item
btnDeleteAll.addEventListener("click",deleteAllitems);

function loadItems(){
    items.forEach(function(item){
        createItem(item);
    })
}

function createItem(text){
        // create li
        const li = document.createElement("li");
        li.className = "list-group-item list-group-item-secondary";
        li.appendChild(document.createTextNode(text));
        //create a
        const a = document.createElement("a");
        a.classList = "delete-item float-right";
        a.setAttribute("href","#");
        a.innerHTML = '<i class="fas fa-times"></i>'; 
    
        // add created elements to list
        li.appendChild(a);
        taskList.appendChild(li);
}

function addNewItem(e){
    if(input.value===''){
        alert("opps! add new item")
        console.log("submit");

    }
    createItem(input.value);

    input.value ="";

    e.preventDefault();
}

//delete ann elements
function deleteItem(e){
    
        if(e.target.className==="fas fa-times"){
            if(confirm("Are you sure you want to delete?")){
            // console.log(e.target);
            e.target.parentElement.parentElement.remove()
         }
    }

}
//delete all items
function deleteAllitems(e){
    if(confirm("Are you sure you want to delete all items?")){
        taskList.childNodes.forEach(function(item){
           // console.log(item);
           if(item.nodeType===1){
            item.remove();
           }
        })
    }
    //taskList.innerHTML="";
}