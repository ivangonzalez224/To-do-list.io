import { listPlaceholder } from './elements.js';

let dataTaskUpRem = [];

// update taks description
export const updateTaskDescrip = (indexTask, inputValue) => {
  dataTaskUpRem = JSON.parse(localStorage.getItem('dataTasks'));
  dataTaskUpRem[indexTask].description = inputValue;
  localStorage.setItem('dataTasks', JSON.stringify(dataTaskUpRem));
};

// remove a task
export const deleteTask = (indexTask, element) => {
  dataTaskUpRem = JSON.parse(localStorage.getItem('dataTasks'));
  dataTaskUpRem.splice(indexTask, 1);
  for (let i = 0; i < dataTaskUpRem.length; i += 1) {
    dataTaskUpRem[i].index = i + 1;
  }
  listPlaceholder.removeChild(element);
  localStorage.setItem('dataTasks', JSON.stringify(dataTaskUpRem));
};
