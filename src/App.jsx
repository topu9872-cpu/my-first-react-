
import { Suspense } from 'react';
import './App.css';
import DaisyuiNav from './componets/DaisyuiNav'
import NavBar from  './componets/navbar/NavBar'
import PriceingOptions from './componets/navbar/priceingOptions/PriceingOptions';
import ResultCharts from './componets/ResultsChart/ResultCharts';
import axios from 'axios';
import MarksCharts from './componets/MarksCharts';

const PriceingPromise= fetch('Priceing.json').then(res => res.json());

const MarksPromise = axios.get('MarksData.json');




function App() {

  return(
  <>
  <NavBar></NavBar>
{/* <DaisyuiNav></DaisyuiNav> */}

<main>
  <Suspense fallback={<span className="loading loading-spinner loading-xl flex mx-auto"></span>}>
    <PriceingOptions PriceingPromise ={PriceingPromise}></PriceingOptions>
  </Suspense>
<Suspense fallback={<span className="loading loading-spinner loading-xl flex mx-auto"></span>}>
  <MarksCharts MarksPromise={MarksPromise}> </MarksCharts>
</Suspense>

  <ResultCharts></ResultCharts>
</main>

    </>
  )
}

export default App
