import React from 'react';

const Task = props => {
    // console.log(props)
    return (
        <div className={`task${props.task.completed ? " completed" : ""}`} onClick={() => props.toggleItem(props.task.id)}>
            <p>{props.task.name}</p>
        </div>
    )
}


export default Task;

//