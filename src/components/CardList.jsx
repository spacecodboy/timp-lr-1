import React from 'react';
import CardItem from './CardItem';
import { Reorder } from 'framer-motion';

const CardList = ({card, setCard}) => { //контейнер со смайлами

    if(!card.length) { //проверка допустимого запроса
        return(
        <h1 style={{textAlign: 'center', margin: '1em' }}>
        Эмоджи не найдены!
      </h1>
      )
    }

    return (
        <Reorder.Group as="span" axys="x" values={card} onReorder={setCard} >
            <div className='cards'>
                {card.map((e, i) => 
                    <CardItem  key={e.slug} e={e}/>
                )}
            </div>
        </Reorder.Group>

    );
};

export default CardList;