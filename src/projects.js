export default class projects {
    static #projectList = [];

    static getProject = name => {
        for( let project of this.#projectList) {
            if (project.name === name) return project;
        }
    }

    static getProjectList = () => this.#projectList;

    static addProject = (project) => this.#projectList.push(project);

    static removeProject = (name) => {
        for(let project of this.#projectList) {
            if(project.name === name) {
                this.#projectList.splice(this.#projectList.indexOf(project), 1);
            }
        }
    }

    
}