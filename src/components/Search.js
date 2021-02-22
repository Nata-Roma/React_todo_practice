import React from 'react';
import PropTypes from 'prop-types';

const Search = ({searchResult, searchValue}) => {

    return (
        <input 
            placeholder='Search in Notes' 
            className='form-control search-input'
            type='text'
            value={searchValue}
            onChange={(e) => {
                searchResult(e.target.value);
            }}
            data-testid='search'
        />
        
    );
};

Search.propTypes = {
    searchResult: PropTypes.func,
    searchValue: PropTypes.string,
};

export default Search;