import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputBlock = ({clickNew}) => {
    const [inputText, setInputText] = useState('');
    return (
        <form 
            className='bottom-panel d-flex'
            onSubmit={(e) => {
                e.preventDefault();
                clickNew(inputText);
                setInputText('');
            }}
            data-testid='form'
        >
            <input 
                className='form-control new-post-label'
                placeholder='What are you now thinking about?' 
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
                type='text'
                name={inputText}
                data-testid='newInput'
            />
            <button
                type='submit'
                className='btn btn-outline-secondary'
                data-testid='form-button'
            >
                Add
            </button>
        </form>
    );
};

InputBlock.propTypes = {
    clickNew: PropTypes.func,
};
export default InputBlock;