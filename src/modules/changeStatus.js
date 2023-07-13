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
export default statusTask;