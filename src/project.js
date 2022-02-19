import Projects from './projects';

export default class Project{
    constructor(name = 'Default') {
        this.name = name;
    }

    #taskList = [];

    getTask = name => {
        for( let task of this.#taskList) {
            if (task.name === name) return task;
        }
    }

    getTaskList = () => this.#taskList;

    addTask = (task) => this.#taskList.push(task);

    removeTask = (name) => {
        for(let task of this.#taskList) {
            if(task.name === name) {
                this.#taskList.splice(this.#taskList.indexOf(task), 1);
            }
        }
    }

}