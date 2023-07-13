import _ from 'lodash';
import './style.css';
import createTask from './modules/createTask.js';
import addTask from './modules/addTask.js';
import { mainTitle, addTaskInput, btnEnter } from './modules/elements.js';

let dataTask = [];

mainTitle.innerHTML = _.join(["Today's", 'to do'], ' ');

// retrieve tasks data and display the task list
window.onload = () => {
  if (localStorage.getItem('dataTasks') !== 'undefined' || localStorage.getItem('dataTasks') !== 'null') {
    dataTask = JSON.parse(localStorage.getItem('dataTasks'));
    createTask(0, dataTask.length, dataTask);
  }
};
// events to add a new task
addTaskInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

btnEnter.addEventListener('click', () => {
  addTask();
});
