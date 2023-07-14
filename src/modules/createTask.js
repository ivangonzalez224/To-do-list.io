import { listPlaceholder } from './elements.js';
import { updateTaskDescrip, deleteTask } from './updateRemove.js';
import statusTask from './changeStatus.js';

let dataTaskCreate = [];
// create card(s) for new task(s)
const createTask = (start, end, arr) => {
  dataTaskCreate = arr;
  for (let i = start; i < end; i += 1) {
    const taskContainer = document.createElement('div');
    taskContainer.className = 'task_container container';
    const leftTaskDiv = document.createElement('div');
    leftTaskDiv.className = 'leftTask_container';
    const taskCheck = document.createElement('input');
    taskCheck.type = 'checkbox';
    taskCheck.checked = dataTaskCreate[i].completed;
    const taskDescrip = document.createElement('input');
    taskDescrip.type = 'text';
    taskDescrip.value = dataTaskCreate[i].description;
    taskDescrip.className = 'input_text';
    const taskMoveBtn = document.createElement('i');
    taskMoveBtn.className = 'material-icons';
    taskMoveBtn.id = 'btn_move';
    taskMoveBtn.innerText = 'more_vert';
    if (taskCheck.checked === true) {
      taskDescrip.style.textDecoration = 'line-through';
      taskDescrip.style.color = '#a3a3a3';
    } else {
      taskDescrip.style.textDecoration = 'none';
      taskDescrip.style.color = '#000';
    }
    taskDescrip.addEventListener('input', () => {
      updateTaskDescrip(i, taskDescrip.value);
    });
    taskDescrip.addEventListener('click', () => {
      taskContainer.style.backgroundColor = '#fffeca';
      taskMoveBtn.innerText = 'delete';
      taskMoveBtn.style.cursor = 'pointer';
    });
    taskDescrip.addEventListener('blur', () => {
      taskContainer.style.backgroundColor = '#fff';
      taskMoveBtn.innerText = 'more_vert';
      taskMoveBtn.style.cursor = 'move';
    });
    taskMoveBtn.addEventListener('mousedown', () => {
      if (taskMoveBtn.innerText === 'delete') {
        const indexElement = Array.from(taskContainer.parentNode.children).indexOf(taskContainer);
        deleteTask(indexElement, taskContainer);
      }
      taskMoveBtn.innerText = 'more_vert';
      taskMoveBtn.style.cursor = 'move';
    });
    taskCheck.addEventListener('change', () => {
      const indexCheck = Array.from(taskContainer.parentNode.children).indexOf(taskContainer);
      const checkStatus = taskCheck.checked;
      statusTask(taskDescrip, indexCheck, checkStatus);
    });
    listPlaceholder.appendChild(taskContainer);
    taskContainer.appendChild(leftTaskDiv);
    leftTaskDiv.appendChild(taskCheck);
    leftTaskDiv.appendChild(taskDescrip);
    taskContainer.appendChild(taskMoveBtn);
  }
};

export default createTask;