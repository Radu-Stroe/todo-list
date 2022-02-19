import './style.css';
import Task from './task.js';
import Project from './project';
import Projects from './projects';

const body = document.querySelector('body');
const h1 = document.createElement('h1');
h1.textContent = 'Boom!'
body.appendChild(h1);


// const swim = new Project('swim');
// const run = new Project('run');
// const read = new Project('read');
// const def = new Project();
Projects.addProject(new Project('swim'));
Projects.getProject('swim').addTask(new Task('Swim', 'Take several pool laps', '02.03.2022', 'Normal'));
Projects.getProject('swim').addTask(new Task('Slow', 'Take 1 pool lap', '04.03.2022', 'Low'));
Projects.getProject('swim').addTask(new Task('Fast', 'Take 20 pool laps', '05.03.2022', 'High'));
Projects.getProject('swim').removeTask('Slow');
Projects.getProject('swim').getTask('Fast').checked = true;

// Projects.addProject(run);
// Projects.addProject(read);
// Projects.addProject(def);
// Projects.removeProject('Default');

// swim.addTask(new Task('Swim', 'Take several pool laps', '02.03.2022', 'Normal'));
// run.addTask(new Task('Run', 'Sprint as much', '12.04.2022', 'High'));
// read.addTask(new Task('Read', 'Read at least 50 pages', '01.04.2022', 'Low'));




console.log(Projects.getProjectList());

console.log()



