import { addTaskInput } from './elements.js';
import createTask from './createTask.js';

let dataTaskAdd = [];
// add a new task
const addTask = () => {
  const storageData = localStorage.getItem('dataTasks');
  if (storageData) {
    dataTaskAdd = JSON.parse(storageData);
  }
  const lengthList = dataTaskAdd.length + 1;
  dataTaskAdd.push({ description: addTaskInput.value, completed: false, index: lengthList });
  addTaskInput.value = '';
  createTask(lengthList - 1, lengthList, dataTaskAdd);
  localStorage.setItem('dataTasks', JSON.stringify(dataTaskAdd));
};
export default addTask;