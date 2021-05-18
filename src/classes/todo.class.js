export class Todo {

    static fromJson ( {idTask, task, complete, create} ) {
        const tempTodo = new Todo( task );

        tempTodo.idTask = idTask; 
        tempTodo.complete = complete;
        tempTodo.create = create;

        return tempTodo;
    }

    constructor( task ) {
        this.task = task;
        this.idTask = new Date().getTime(); //1234252
        this.complete = false;
        this.create = new Date();
    }
}