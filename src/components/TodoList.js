import React from "react";
import Todo from "./Todo";
import "./Todo.css";

const ToDoList = props => {
    return (
        <div className="todo-list-container">
            <div className="todo-list">
                {props.todos.map(item => (
                    <Todo 
                        key={item.id} 
                        item={item} 
                        toggleItem={props.toggleItem} 
                    />
                ))}
            </div>
            <button className='clear-btn' onClick={props.clearCompleted}>Clear Completed Items</button>
        </div>
    )
};

export default ToDoList;