import React from 'react';
import CardItem from './CardItem';

const CardList = ({card}) => { //контейнер со смайлами

    if(!card.length) { //проверка допустимого запроса
        return(
        <h1 style={{textAlign: 'center', margin: '1em' }}>
        Эмоджи не найдены!
      </h1>
      )
    }

    return (
        <div className='cards'>
            {card.map((e, i) => 
                <CardItem  key={e.slug} e={e}/>
            )}
        </div>
    );
};

export default CardList;