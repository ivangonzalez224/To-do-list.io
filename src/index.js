import _ from 'lodash';
import './style.css';
import createTask from './modules/createTask.js';
import addTask from './modules/addTask.js';
import {
  mainTitle, addTaskInput, btnEnter, btnClearAll,
} from './modules/elements.js';
import { clearAll } from './modules/changeStatus.js';

let dataTask = [];

mainTitle.innerHTML = _.join(["Today's", 'to do'], ' ');

// retrieve tasks data and display the task list
window.onload = () => {
  const dataStorage = localStorage.getItem('dataTasks');
  if (dataStorage !== 'undefined' && dataStorage !== null) {
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

btnClearAll.addEventListener('click', () => {
  clearAll();
});