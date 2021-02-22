import React from 'react';
import PropTypes from 'prop-types';

const Header = ({user, messages}) => {
    const handleMessagesLiked = () => {
        return messages.filter((elem) => elem.like).length;
    };
    
    return (
        <div className='app-header d-flex'>
            <h1>{user}</h1>
            <h2>
                <span>
                    {messages.length} notes,
                </span>
                {' '}
                <span>
                    from which {handleMessagesLiked()} liked
                </span>
            </h2>
        </div>
    );
};

Header.propTypes = {
    user: PropTypes.string.isRequired,
    messages: PropTypes.array,
};

export default Header;


