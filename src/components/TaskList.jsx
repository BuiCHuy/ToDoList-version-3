import React from 'react';
import Task from "./Task";
function TaskList(props) {

    const listoftask = props.task.map(task=>{
        return <Task key={task.id} task={task} onDeleteTask={props.onDeleteTask} onEditTask={props.onEditTask}/>
    })
    return (
        <div>
            {listoftask}
        </div>
    );
}

export default TaskList;