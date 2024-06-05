import React from 'react';
import Button from './Button'
function AddForm(props) {
    const [inputValue, setInputValue] = React.useState('');
    const inputchange =(e)=>{
        setInputValue(e.target.value)
    }
    const handleAdd = (e)=>{
        e.preventDefault();
        if(inputValue!==""){
            props.AddTask(inputValue);
            setInputValue("")
        }

        else
            alert("Please Enter a To do")
    }
    return (
        <div>
            <h1>To do list</h1>
            <form onSubmit={handleAdd} action="" style={{
                display: "flex",
                gap:"10px",
                justifyContent:"center"
            }}>

                <input type="text" value={inputValue} placeholder={'Enter an item...'} onChange={inputchange}/>
                <Button text={'Add'}/>
            </form>
        </div>
    );
}

export default AddForm;