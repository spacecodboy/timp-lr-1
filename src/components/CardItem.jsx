import React from 'react';

const CardItem = (props) => {
    return (
        <div className='card'>
            <div className='image'>
                {props.e.character}
            </div>
            <div className='name'>
                {props.e.unicodeName}
            </div>
        </div>
    );
};

export default CardItem;