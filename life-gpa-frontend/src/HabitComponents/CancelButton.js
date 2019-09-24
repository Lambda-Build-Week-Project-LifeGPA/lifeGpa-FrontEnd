import React from 'react';


const CancelButton = (props) => {
    return (
        <button onClick={(e) => props.stat(false)}>
            Cancel
        </button>
    )
}

export default CancelButton;