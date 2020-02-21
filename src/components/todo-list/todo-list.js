import React from "react";

import TodoListItem from "../todo-list-item";
import './todo-list.css';

const TodoList = ({ todos, onDeletion, onToggleImportant, onToggleDone }) => {
    const items = todos.map((item) => {
        const { key: id, ...other } = item;

        return (
            <li key={id} className="list-group-item">
                <TodoListItem { ...other }
                              onDeletion={() => onDeletion(id)}
                              onToggleImportant={() => onToggleImportant(id)}
                              onToggleDone={() => onToggleDone(id)}/>
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {items}
        </ul>
    );
};

export default TodoList;