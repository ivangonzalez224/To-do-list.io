import { listPlaceholder } from './elements.js';

let dataTaskStatus = [];

// change task status
const statusTask = (taskDescrip, indexTask, status) => {
  dataTaskStatus = JSON.parse(localStorage.getItem('dataTasks'));
  if (status === true) {
    taskDescrip.style.textDecoration = 'line-through';
    taskDescrip.style.color = '#a3a3a3';
  } else {
    taskDescrip.style.textDecoration = 'none';
    taskDescrip.style.color = '#000';
  }
  dataTaskStatus[indexTask].completed = status;
  localStorage.setItem('dataTasks', JSON.stringify(dataTaskStatus));
};

export const clearAll = () => {
  dataTaskStatus = JSON.parse(localStorage.getItem('dataTasks'));
  const clearArr = dataTaskStatus.filter((task) => task.completed === false);
  const cardContainerArr = listPlaceholder.children;
  for (let i = cardContainerArr.length - 1; i >= 0; i -= 1) {
    if (dataTaskStatus[i].completed === true) {
      listPlaceholder.removeChild(cardContainerArr[i]);
    }
  }
  for (let i = 0; i < clearArr.length; i += 1) {
    clearArr[i].index = i + 1;
  }

  localStorage.setItem('dataTasks', JSON.stringify(clearArr));
};

export default statusTask;
