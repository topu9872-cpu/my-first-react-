import React from 'react';
import PriceingFeatures from './PriceingFeatures';

const PriceingCards = ({Priceing}) => {
    const {name, price, duration,features} = Priceing

    return (
        <div className='flex flex-col border-2 bg-blue-400 p-4 rounded-xl'>
            {/* card header */}
<div>
    <h1 className='text-6xl'>{name}</h1>
    <h4>{price}</h4>
</div>
{/* body of card */}
<div className='bg-blue-500 p-4 pl-2 rounded-2xl flex-1'>
<p>{duration}</p>

{
    features.map((feature, index) => <PriceingFeatures
    key={index}
    feature={feature}></PriceingFeatures>)
}
</div>
<button className="btn w-full mt-4">Subscribe</button>
        </div>
    );
};

export default PriceingCards;