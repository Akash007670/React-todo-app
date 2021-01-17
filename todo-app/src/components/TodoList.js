import React from 'react';
import Todo  from './Todo';

const TodoList = ({todos , setTodos ,filterTodos}) => {
    // console.log(todos);
    return (
        <div className = "todo-container">
            <ul className = "todo-list">
                {filterTodos.map(todo => (
                    <Todo 
                        key = {todo.id}
                        text = {todo.text}
                        todos = {todos}
                        setTodos = {setTodos}
                        todo = {todo}
                        filterTodos = {filterTodos}
                    />
                ))}
            </ul>            
        </div>
    )
}

export default TodoList;
