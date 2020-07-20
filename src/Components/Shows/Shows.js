import React from 'react';
import './Shows.css';
import Show from './Show/Show';
const Shows = (props) => {
    return (
        <div>
            {props.data}
             
        </div>
    )
}

export default Shows;