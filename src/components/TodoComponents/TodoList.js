import React from 'react'

import Todo from "./Todo";

const TodoList = props => {
  // console.log(props);
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
    return (
        <div className="todo-list">
            {props.tasks.map(task => (
                <Todo key={task.id} task={task} toggleItem={props.toggleItem} />
            ))}
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;