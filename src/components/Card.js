import React from 'react';

const Card = ({cardInfo}) => {
    return (
        <div className='card'>
            <img src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="" className='cardImg'/>
            <h2 className='cardTitle'>{ cardInfo.name }</h2>
            <p className='cardDescription'>{cardInfo.username}</p>
        </div>
    );
};
export default Card;