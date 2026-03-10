const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');


document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks(){

    let tasks = getTaskFromLocalStorage();

    tasks.forEach(task => {
        addTaskToDOM(task)
    });

}

todoForm.addEventListener('submit',addTask);
function addTask(event){

    event.preventDefault();

   const taskText = todoInput.value.trim();
   if(taskText !== ''){
    const task = {
        id : Date.now(),
        text : taskText,
        completed : false,
    }
    addTaskToDOM(task)
    saveTaskToLocalStorage(task)
    // todoInput.value = ''
   }
}

function addTaskToDOM(task){

const li = document.createElement('li');
li.className = `Todo-item${task.complated ? 'completed' : ''}`;
li.dataset.id = task.id
li.innerHTML = 
            `<input type="checkbox" class="complete-checbox" ${task.completed ? 'checked' : ''}>
            <span class="Task">${task.text}</span>
            <button class="Edit-btn">Edit</button>
            <button class="delete-btn" >delete</button>`
            // console.log(li)


todoList.appendChild(li);

if(todoInput !== ''){
    todoInput.value = ''
}

attachEventListeners(li,task);
}
function attachEventListeners(li,task){
    const deleteBtn = li.querySelector('.delete-btn')
    const editBtn = li.querySelector('.Edit-btn')
    const checbox = li.querySelector('.complete-checbox')

    editBtn.addEventListener('click',function(){
        handleEdit(task.id, li)
    })

    deleteBtn.addEventListener('click', function(){
        handleDelete(task.id,li)
        // console.log("delete btn clicked",task)
    })
    checbox.addEventListener('change',function(){
        console.log("checked",checbox.checked)
        toggleTaskComplition(task.id,li,checbox.checked)
    })

}

function toggleTaskComplition(id,li,isCompleted){
    const tasks = getTaskFromLocalStorage();
    const task = tasks.find(task => task.id == id)

    if(task){
        task.completed = isCompleted;
        localStorage.setItem('tasks',JSON.stringify(tasks));
        li.classList.toggle('completed', isCompleted)
    }
}

function handleEdit(taskId,li){
    const taskSpan = li.querySelector('.Task')
    const newTaskText = prompt('update your varius task',taskSpan.textContent)

    if(newTaskText !== null && newTaskText.trim() !== ''){
        updateTask(taskId, newTaskText);
        // update the DOM
        taskSpan.textContent = newTaskText;    }
   
}


function updateTask(id,newTaskText){
    const tasks = getTaskFromLocalStorage();
    let task = tasks.find(task => task.id == id)
    if(task){
        task.text = newTaskText;
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }
}

function handleDelete(id,li){
    let tasks = getTaskFromLocalStorage();
    tasks = tasks.filter(task => task.id != id)

    localStorage.setItem('tasks', JSON.stringify(tasks))

    li.remove();

}

function saveTaskToLocalStorage(task){
    const oldTasks = getTaskFromLocalStorage();
    oldTasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(oldTasks))
}


function getTaskFromLocalStorage(){
    let oldTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return oldTasks
}
