import React from 'react';
const MarketingImage = () => {
    return (
        <a onClick={() => window.open("https://github.com/spacecodboy")}>
        <img style={{position:'fixed', width: '250px', height: '250px', display: 'flex', right:'30px', cursor:'pointer', bottom:'5%'}}  src={require('E:/НГТУ (НЭТИ)/2 КУРС/4 СЕМЕСТР/ТИМП/Лаба1/timp-lr-1/src/image/kvac.jpg')}/>
      </a>
    );
};

export default MarketingImage;
