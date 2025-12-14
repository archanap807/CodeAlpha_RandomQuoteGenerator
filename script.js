function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.textContent = task;

    // Mark as completed
    li.onclick = () => {
        li.style.textDecoration = "line-through";
    };

    // Delete on double click
    li.ondblclick = () => li.remove();

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
