import React from 'react';

const CardClient = ({photo, name, text}) => {
  return (
    <div className="card">
      <div className='card-box-img'>
        <img src={photo} alt={name} />
      </div>
      <div className='card-box-title'>
        <h3>{name}</h3>
      </div>
      <div className='card-box-text'>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default CardClient;