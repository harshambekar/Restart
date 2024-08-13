import React from 'react';

function Card({ tasks }) {
    return (
        <>
            {tasks.map((task, index) => (
                <p key={index} id='thiso'>{task}</p>
            ))}
        </>
    );
}

export default Card;
