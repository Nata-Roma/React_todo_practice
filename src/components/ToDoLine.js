import React from 'react';
import PropTypes from 'prop-types';

const ToDoLines = ({message, clickNotes, clickDelete}) => {
    const {text, star, like, id} = message;

    let classNames = 'app-list-item d-flex justify-content-between';
    if(star) classNames += ' important';
    if(like) classNames += ' like';

    return (
        <div className={classNames}>
            <span 
                className='app-list-item-label'
                onClick={() => {clickNotes(id, 'like');}}
                data-testid='postText'
            >
                {text}
            </span>
            <div className='d-flex justify-content-center align-items-center'>
                <button 
                    type='button' 
                    className='btn-star btn-sm' 
                    data-testid='postStar' 
                    onClick={() => {clickNotes(id, 'star');}}>
                    <i 
                        className='fa fa-star'
                    >
                    </i>
                </button>
                <button 
                    type='button' 
                    className='btn-trash btn-sm' 
                    data-testid='postDelete' 
                    onClick={() => {clickDelete(id);}}>
                    <i 
                        className='fa fa-trash-o'
                        
                    >
                    </i>
                </button>
                <i className='fa fa-heart' data-testid='postLike'></i>
            </div>
        </div>
    );
};

ToDoLines.propTypes = {
    message: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        star: PropTypes.bool,
        like: PropTypes.bool,
    }),
    clickNotes: PropTypes.func,
    clickDelete: PropTypes.func,
};

export default ToDoLines;
