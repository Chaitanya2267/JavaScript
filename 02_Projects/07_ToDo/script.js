const taskInput = document.getElementById("task-input");

const addButton = document.getElementById("add-button");

const taskList = document.getElementById("task-list");

addButton.addEventListener("click", function() {
    if(taskInput.value.trim() === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskInput.value;

    // taskInput.appendChild(li);
    taskList.appendChild(li);
    taskInput.value = "";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", function() {
        li.remove();
    });

});