import { todoList } from "..";
import { Todo } from "./todo.class";

export class TodoList {
    
    constructor() {
        // this.todos = [];
        this.loadLocalStorage();
    }

    newTodo( task ) {
        this.todos.push( task );
        this.saveLocalStorage();
    }

    deleteTodo( idTask ) {
        this.todos = this.todos.filter(task => task.idTask != idTask );
        this.saveLocalStorage();

    }

    stateTodo( idTask ) {
        for( const task of this.todos ) {
            if( task.idTask == idTask ) {
                task.complete = !task.complete;
                this.saveLocalStorage();
                break;
            }
        }

    }

    deleteCompleteTasks() {
        this.todos = this.todos.filter( task => !task.complete );
        this.saveLocalStorage();
    }

    saveLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    loadLocalStorage() {
        this.todos = ( localStorage.getItem('todo') ) 
        ? JSON.parse(localStorage.getItem('todo')) : [];

        this.todos = this.todos.map( obj => Todo.fromJson( obj ) ); // Todo.fromJson
    }

}