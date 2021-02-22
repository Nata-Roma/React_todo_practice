import React from 'react';
import PropTypes from 'prop-types';

const StatusFilters = ({clickAll, clickLiked}) => {

    return (
        <div className='btn-group'>
            <button 
                type='button' 
                className='btn btn-info' 
                onClick={clickAll}
                data-testid='searchAll'
            >
                All
            </button>
            <button 
                type='button' 
                className='btn btn-outline-secondary' 
                onClick={clickLiked}
                data-testid='searchLiked'
            >
                Liked
            </button>
        </div>
    );
};

StatusFilters.propTypes = {
    clickAll: PropTypes.func,
    clickLiked: PropTypes.func,
};

export default StatusFilters;