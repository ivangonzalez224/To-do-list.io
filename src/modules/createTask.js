import tasks from './taskData.js';
import listPlaceholder from './elements.js';

const createTask = () => {
  for (let i = 0; i < tasks.length; i += 1) {
    const taskContainer = document.createElement('div');
    taskContainer.className = 'task_container container';
    const leftTaskDiv = document.createElement('div');
    const taskCheck = document.createElement('input');
    taskCheck.type = 'checkbox';
    taskCheck.checked = tasks[i].completed;
    const taskDescrip = document.createElement('input');
    taskDescrip.type = 'text';
    taskDescrip.value = tasks[i].description;
    taskDescrip.className = 'input_text';
    const taskMoveBtn = document.createElement('i');
    taskMoveBtn.className = 'material-icons';
    taskMoveBtn.innerText = 'more_vert';
    listPlaceholder.appendChild(taskContainer);
    taskContainer.appendChild(leftTaskDiv);
    leftTaskDiv.appendChild(taskCheck);
    leftTaskDiv.appendChild(taskDescrip);
    taskContainer.appendChild(taskMoveBtn);
  }
};

export default createTask;