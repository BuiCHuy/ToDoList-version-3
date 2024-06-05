import React from 'react';
import Button from './Button'
function Task(props) {
    const handlerDeleteTask=()=>{
        props.onDeleteTask(props.task.id);
    }
    const handleEdit = () => {
        setEditMode(true);
    };
    const [editMode, setEditMode] = React.useState(false);
    const [newName, setNewName] = React.useState(props.task.name);
    const handleSave = () => {
        props.onEditTask(props.task.id, newName);
        setEditMode(false);
    };
    const handleInputChange = (event) => {
        setNewName(event.target.value);
    };
    return (
        <div style={{
            display: 'flex',
            margin:'10px 500px',
            backgroundColor:"darkgray",
            justifyContent:"space-between",
            borderRadius:"5px"
        }}>
            {editMode ? (
                    <input
                        type="text"
                        value={newName}
                        onChange={handleInputChange}
                    />
                ) :(
                <p style={{
                margin:'5px'
            }}>
                {props.task.name}
            </p>
            )}
            <div style={{
                display:"flex",
            }}>
                <Button text={'Delete'} onClick={handlerDeleteTask}/>
                {editMode ? (
                    <Button text={'Save'} onClick={handleSave} />
                ) : (
                    <Button text={'Edit'} onClick={handleEdit}/>
                )}

            </div>

        </div>
    );
}

export default Task;