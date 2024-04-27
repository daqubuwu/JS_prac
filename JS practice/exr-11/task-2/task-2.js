const tasks = [
    {
      id: "1138465078061",
      completed: false,
      text: "Посмотреть новый урок по JavaScript",
    },
    {
      id: "1138465078062",
      completed: false,
      text: "Выполнить тест после урока",
    },
    {
      id: "1138465078063",
      completed: false,
      text: "Выполнить ДЗ после урока",
    },
  ];
  
  const taskList = document.createElement("div");
  taskList.className = "tasks-list";
  
  tasks.forEach((task) => {
    const taskItem = document.createElement("div");
    taskItem.dataset.taskId = task.id;
    taskItem.innerHTML = `
      <div class="task-item__main-container">
        <div class="task-item__main-content">
          <form class="checkbox-form">
            <input
              class="checkbox-form__checkbox"
              type="checkbox"
              id="${task.id}"
            />
            <label for="${task.id}"></label>
          </form>
          <span class="task-item__text">${task.text}</span>
        </div>
        <button
          class="task-item__delete-button default-button delete-button"
          data-delete-task-id="5"
        >
          Удалить
        </button>
      </div>
    `;
  
    taskList.appendChild(taskItem);
  });
  
  document.body.appendChild(taskList);
  
  const taskForm = document.createElement("form");
  taskForm.className = "create-task-block";
  taskForm.innerHTML = `
    <input placeholder="Task" class="create-task-block__input"/>
    <button type="submit">Submit</button>
  `;
  document.body.appendChild(taskForm);
  
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = taskForm.querySelector(".create-task-block__input");
    const taskText = input.value.trim();
  
    if (taskText) {
      const existingTask = tasks.find((task) => task.text === taskText);
      if (existingTask) {
        const errorBlock = document.createElement("span");
        errorBlock.className = "error-message-block";
        errorBlock.textContent = "Такая задача уже есть!";
        taskForm.appendChild(errorBlock);
        setTimeout(() => errorBlock.remove(), 3000);
      } else {
        const newTask = {
          id: Date.now().toString(),
          completed: false,
          text: taskText,
        };
        tasks.push(newTask);
  
        const newTaskItem = document.createElement("div");
        newTaskItem.dataset.taskId = newTask.id;
        newTaskItem.innerHTML = `
          <div class="task-item__main-container">
            <div class="task-item__main-content">
              <form class="checkbox-form">
                <input
                  class="checkbox-form__checkbox"
                  type="checkbox"
                  id="${newTask.id}"
                />
                <label for="${newTask.id}"></label>
              </form>
              <span class="task-item__text">${newTask.text}</span>
            </div>
            <button
              class="task-item__delete-button default-button delete-button"
              data-delete-task-id="5"
            >
              Удалить
            </button>
          </div>
        `;
  
        taskList.appendChild(newTaskItem);
  
        const btnDelete = newTaskItem.querySelector("button");
        btnDelete.addEventListener("click", () => {
          modal.classList.remove("modal-overlay_hidden");
          modal.dataset.taskId = newTask.id;
        });
      }
    } else {
      const errorBlock = document.createElement("span");
      errorBlock.className = "error-message-block";
      errorBlock.textContent = "Название не должно быть пустым!";
      taskForm.appendChild(errorBlock);
      setTimeout(() => errorBlock.remove(), 3000);
    }
  
    input.value = "";
  });
  
  const modal = document.querySelector(".modal-overlay"),
    modalCloseBtn = modal.querySelector(".cancel-button"),
    taskDeleteBtn = modal.querySelector(".confirm-button");
  
  [...taskList.children].forEach((task) => {
    const btnDelete = task.querySelector("button");
    btnDelete.addEventListener("click", () => {
      modal.classList.remove("modal-overlay_hidden");
      modal.dataset.taskId = task.dataset.taskId;
    });
  });
  
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("modal-overlay_hidden");
    }
  });
  
  modalCloseBtn.addEventListener("click", () =>
    modal.classList.add("modal-overlay_hidden")
  );
  
  taskDeleteBtn.addEventListener("click", () => {
    const taskDeleteId = modal.dataset.taskId;
    [...taskList.children].forEach((task) => {
      if (task.dataset.taskId === taskDeleteId) task.remove();
    });
  
    modal.classList.add("modal-overlay_hidden");
  });
  