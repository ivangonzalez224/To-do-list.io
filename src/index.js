import _ from 'lodash';
import './style.css';
import createTask from './modules/createTask.js';
import { mainTitle } from './modules/elements.js';

mainTitle.innerHTML = _.join(["Today's", 'to do'], ' ');
// crea tasks list//
createTask();
