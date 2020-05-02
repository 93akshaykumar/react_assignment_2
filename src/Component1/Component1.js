import React from 'react';

const component = (props) => {


    return (
        <div className="Component">
        <input type="text" onChange={props.change} />
        <p>The Length of Input :: {props.data}</p>
        </div>
    );

} 

export default component
