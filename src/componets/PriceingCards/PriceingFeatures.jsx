import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PriceingFeatures = ({feature}) => {
    return (
    
       <p className='flex gap-2 m-4'><CircleCheckBig></CircleCheckBig>{feature}</p>
      
    );
};

export default PriceingFeatures;