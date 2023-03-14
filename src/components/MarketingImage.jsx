import React from 'react';
const MarketingImage = () => {
    return (
        <a onClick={() => window.open("https://github.com/spacecodboy")}>
        <img 
        style={{position:'fixed', 
        width: '9vw', 
        height: '15vh', 
        display: 'flex', 
        right:'30px', 
        cursor:'pointer', 
        bottom:'5%'}}  
        src={require('E:/НГТУ (НЭТИ)/2 КУРС/4 СЕМЕСТР/ТИМП/Лаба1/timp-lr-1/src/image/GitHub-Mark.png')}/>
      </a>
    );
};

export default MarketingImage;
