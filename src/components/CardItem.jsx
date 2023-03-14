import { Reorder } from 'framer-motion';
import React from 'react';

const CardItem = (props) => { //элемент с описание смайла
    return (
        <Reorder.Item value={props.e}>
            <div className='card'>
                <div className='image'>
                    {props.e.character}
                </div>
                <div className='name'>
                    {props.e.unicodeName}
                </div>
            </div>
        </Reorder.Item>
    );
};

export default CardItem;