import './styles.css';
import { Todo, TodoList } from './classes';


const todoList = new TodoList();

const task = new Todo("Learn JS");
const task2 = new Todo("Learn SAP");

todoList.newTodo( task );
todoList.newTodo( task2 );

console.log(todoList);