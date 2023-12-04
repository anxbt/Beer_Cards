// BeerCard.js
import React from 'react';

const BeerCard = ({ beer }) => (
  
  <div className='BeerCard'>
    <img src={beer.image_url} alt={beer.name} style={{ maxWidth: '100px' }} className='img' />
    <h3>{beer.name}</h3>
    <p>{beer.tagline}</p>
  </div>
  
);

export default BeerCard;
