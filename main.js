const loadTasksBtn = document.getElementById("loadTasksBtn");
const taskListEl = document.getElementById("taskList");
const statusMessageEl = document.getElementById("statusMessage");

const taskManager = new TaskManager();

function renderTasks() {
  taskListEl.innerHTML = "";

  taskManager.tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    if (task.completed) {
      taskDiv.classList.add("completed");
    }

    const titleSpan = document.createElement("span");
    titleSpan.textContent = task.title;

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle";
    toggleBtn.addEventListener("click", () => {
      taskManager.toggleTask(task.id);
      renderTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      taskManager.removeTask(task.id);
      renderTasks();
    });

    taskDiv.appendChild(titleSpan);
    taskDiv.appendChild(toggleBtn);
    taskDiv.appendChild(deleteBtn);
    taskListEl.appendChild(taskDiv);
  });
}
async function loadTasks() {
  try {
    statusMessageEl.textContent = "Loading tasks...";

    const rawTasks = await fetchTasks();

    const jsonString = JSON.stringify(rawTasks);
    const parsedTasks = JSON.parse(jsonString);

    const taskInstances = parsedTasks.map(
      (item) => new Task(item.id, item.title, item.completed),
    );

    taskManager.setTasks(taskInstances);
    renderTasks();
    statusMessageEl.textContent = "";
  } catch (error) {
    statusMessageEl.textContent = "Failed to load tasks. Please try again.";
  }
}

loadTasksBtn.addEventListener("click", loadTasks);
