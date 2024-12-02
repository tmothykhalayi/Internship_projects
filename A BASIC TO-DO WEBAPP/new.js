
// Store tasks in arrays
let pendingTasks = [];
let completedTasks = [];

// Add a new task to the list
function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert("Please enter a task!");
    return;
  }

  const timestamp = new Date().toLocaleString();
  const task = { text: taskText, timeAdded: timestamp, completed: false };

  pendingTasks.push(task);
  taskInput.value = ''; // clear the input field
  renderTasks();
}

// Render all tasks (both pending and completed)
function renderTasks() {
  // Clear current task lists
  const pendingList = document.getElementById('pending-list');
  const completedList = document.getElementById('completed-list');
  
  pendingList.innerHTML = '';
  completedList.innerHTML = '';

  // Render pending tasks
  pendingTasks.forEach((task, index) => {
    const taskElement = document.createElement('li');
    taskElement.innerHTML = `
      <span>${task.text} <span class="timestamp">(Added: ${task.timeAdded})</span></span>
      <div>
        <button class="edit" onclick="editTask(${index})">Edit</button>
        <button class="complete" onclick="completeTask(${index})">Complete</button>
        <button class="delete" onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    pendingList.appendChild(taskElement);
  });

  // Render completed tasks
  completedTasks.forEach((task, index) => {
    const taskElement = document.createElement('li');
    taskElement.classList.add('completed');
    taskElement.innerHTML = `
      <span>${task.text} <span class="timestamp">(Completed: ${task.timeAdded})</span></span>
      <div>
        <button class="edit" onclick="editTask(${index}, true)">Edit</button>
        <button class="delete" onclick="deleteTask(${index}, true)">Delete</button>
      </div>
    `;
    completedList.appendChild(taskElement);
  });
}

// Mark a task as completed
function completeTask(index) {
  const task = pendingTasks.splice(index, 1)[0];
  task.completed = true;
  task.timeAdded = new Date().toLocaleString(); // Update completion time
  completedTasks.push(task);
  renderTasks();
}

// Delete a task
function deleteTask(index, isCompleted = false) {
  if (isCompleted) {
    completedTasks.splice(index, 1);
  } else {
    pendingTasks.splice(index, 1);
  }
  renderTasks();
}

// Edit a task
function editTask(index, isCompleted = false) {
  const newText = prompt("Edit your task:", isCompleted ? completedTasks[index].text : pendingTasks[index].text);
  
  if (newText && newText.trim() !== '') {
    if (isCompleted) {
      completedTasks[index].text = newText;
    } else {
      pendingTasks[index].text = newText;
    }
    renderTasks();
  }
}
