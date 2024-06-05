import React from 'react';

function Button(props) {
    return (
        <div>
            <button style={{
                backgroundColor:"black",
                color:"white",
                margin:"5px"
            }} onClick={props.onClick}>{props.text}</button>
        </div>
    );
}

export default Button;