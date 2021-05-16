import { Todo } from "../classes";
import { todoList } from "../index";

// HTML References
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');

export const createTodoHtml = ( task ) => {

    const htmlTask = `
    <li class="${ (task.complete) ? 'completed' : ''}" data-id="${task.idTask}">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (task.complete) ? 'checked' : '' }>
            <label>${task.task}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;
    const div = document.createElement('div');
    div.innerHTML = htmlTask;

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;

}

// Events
txtInput.addEventListener('keyup', (event) => {
    if( event.keyCode === 13 && txtInput.value.length > 0) {
        console.log(txtInput.value);
        const newTask = new Todo(txtInput.value);
        todoList.newTodo(newTask);
        createTodoHtml( newTask );
        txtInput.value = '';
    }
});
