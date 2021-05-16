export class Todo {
    constructor( task ) {
        this.task = task;
        this.idTask = new Date().getTime(); //1234252
        this.complete = false;
        this.create = new Date();
    }
}