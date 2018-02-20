import React from 'react';

const Input = (props) => {
    return(
        <input
            type={props.type}
            onChange={props.onChange}
            placeholder={props.placeholder}
            name={props.name}
        />
    )   
}

export default Input;