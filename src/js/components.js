import { Todo } from "../classes";
import { todoList } from "../index";

// HTML References
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const buttonCompleted = document.querySelector('.clear-completed');
const ulFilters = document.querySelector('.filters');
const anchorFilters = document.querySelectorAll('.filtro');

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

divTodoList.addEventListener('click', (event) => {
    const elementName = event.target.localName;  //input, label, button
    const todoElement = event.target.parentElement.parentElement;
    const idTodo = todoElement.getAttribute('data-id');

    if( elementName.includes('input') ) {
        todoList.stateTodo( idTodo );
        todoElement.classList.toggle('completed');
    } else if ( elementName.includes('button') ) {
        todoList.deleteTodo(idTodo);
        divTodoList.removeChild( todoElement );
    }

    console.log(todoList);
});

buttonCompleted.addEventListener('click', () => {
    todoList.deleteCompleteTasks();
    for( let i = divTodoList.children.length - 1; i >= 0; i-- ) {
        const element = divTodoList.children[i];
        if( element.classList.contains('completed') ) {
            divTodoList.removeChild(element);
        }
    } 
});

ulFilters.addEventListener('click', (event) => {
    const filter = event.target.text;
    if( !filter ) {return;}

    anchorFilters.forEach( elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for( const element of divTodoList.children ) {
        element.classList.remove('hidden');
        const completed = element.classList.contains('completed');
        switch( filter ) {
            case 'Pendientes':
                if( completed ) {
                    element.classList.add('hidden');
                }
            break;

            case 'Completados':
                if( !completed ) {
                    element.classList.add('hidden');
                }
            break;
        }
    }
});
