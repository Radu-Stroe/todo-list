import './style.css';

const renderContent = (body) => {

    const app = document.createElement('div');
    app.setAttribute('id', 'app');
    body.appendChild(app);

    // HEADER
    const appName = document.createElement('div');
    appName.setAttribute('id', 'appName');
    app.appendChild(appName);

    const heading1 = document.createElement('h1');
    heading1.textContent = 'Todo List';
    appName.appendChild(heading1);

    // CONTENT
    const projectsAndTasks = document.createElement('div');
    projectsAndTasks.setAttribute('id', 'projectsAndTasks');
    app.appendChild(projectsAndTasks);

    // PROJECTS
    const projects = document.createElement('div');
    projects.classList.add('projects');
    projectsAndTasks.appendChild(projects);

    const home = document.createElement('h3');
    home.textContent = 'Home';
    projects.appendChild(home);

    const today = document.createElement('h3');
    today.textContent = 'Today';
    projects.appendChild(today);

    const week = document.createElement('h3');
    week.textContent = 'Week';
    projects.appendChild(week);

    const projectsTitle = document.createElement('h2');
    projectsTitle.textContent = 'Projects';
    projects.appendChild(projectsTitle);

    const projectList = document.createElement('div');
    projectList.classList.add('projectList');
    projects.appendChild(projectList);

    // TASKS
    const tasks = document.createElement('div');
    tasks.classList.add('tasks');
    projectsAndTasks.appendChild(tasks);

}

export default renderContent;