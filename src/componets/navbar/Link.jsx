import React from 'react';

const Link = ({route}) => {
    return (
       
      <il className='mr-10'> 
  <a href={route.path}>{route.name}</a>
      </il>
      
      
       
    );
};

export default Link;