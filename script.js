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
//delete all item
btnDeleteAll.addEventListener("click",deleteAllitems);


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
    if(confirm("Are you sure you want to delete?")){
        if(e.target.className==="fas fa-times"){
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