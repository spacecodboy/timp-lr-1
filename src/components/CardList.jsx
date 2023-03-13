import React from 'react';
import CardItem from './CardItem';

const CardList = ({card}) => {

    if(!card.length) {
        return(
        <h1 style={{textAlign: 'center'}}>
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