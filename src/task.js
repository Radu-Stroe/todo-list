export default class Task {
    constructor(name, details, dueDate, priority, checked = false) {
        this.name = name;
        this.details = details;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = checked;
    }
}