// Select DOM elements
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Define addTask function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new li element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a new button element
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = 'remove-btn';

    // Assign onclick event to remove the li
    removeBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Append remove button to li, then li to task list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}

// Attach event listeners
addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
