function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create list item
    const li = document.createElement('li');

    // Create and append text node
    const textNode = document.createTextNode(taskText);
    li.appendChild(textNode);

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = 'remove-btn';

    // Remove the task on click
    removeBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Append remove button to the list item
    li.appendChild(removeBtn);

    // Append list item to the task list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}
