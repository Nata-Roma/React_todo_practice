import React from 'react';
import ToDoLines from './ToDoLine';
import PropTypes from 'prop-types';

const ToDoContainer = ({messages, clickNotes, clickDelete}) => {
    return (
        <ul className='app-list list-group'>
            {messages && messages.map((message) => (
                <li key={message.id} className='list-group-item'>
                    <ToDoLines 
                        message={message} 
                        clickNotes={clickNotes}
                        clickDelete={clickDelete}
                    />
                </li>
                
            ))}
        </ul>
    );
};

ToDoContainer.propTypes = {
    messages: PropTypes.array,
    clickNotes: PropTypes.func,
    clickDelete: PropTypes.func,
};

export default ToDoContainer;
