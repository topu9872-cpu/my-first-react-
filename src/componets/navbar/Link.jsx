import React from 'react';

const Link = ({route}) => {
    return (
       
      <il className='lg:mr-10 px-4  hover:bg-amber-400'> 
  <a  href={route.path}>{route.name}</a>
      </il>
      
      
       
    );
};

export default Link;