import React from 'react';
import { use } from 'react';
import PriceingCards from '../../PriceingCards/PriceingCards';
import DaisyPriceing from '../../DaisyPriceing/DaisyPriceing';

const PriceingOptions = ({PriceingPromise}) => {
    const PriceingData =  use(PriceingPromise);
   
    return (
        <div>
          <h2 className="text-5xl">Get our Membership</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
            {/* { */}
                {/* // PriceingData.map(Priceing => <PriceingCards */}
                    {/* // key={Priceing.id}  */}
                    {/* // Priceing={Priceing}></PriceingCards>) */}
            {/* // } */}

            {
                PriceingData.map(priceing =><DaisyPriceing
                key={priceing.id}
                Priceing={priceing}
                ></DaisyPriceing>)
            }
            </div>  
        </div>
    );
};

export default PriceingOptions;