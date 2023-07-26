// import './App.css';
import LandingPage from './components/landingPage/landingPage';
import $ from 'jquery';
import React ,{ useState } from 'react';
import imageSrc from "./images/makeup.jpg"
import Makeup from './components/cards/nailCard/makeupCard';
import Shoe from './components/cards/shoeCard/shoeCard';
function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="App">

<LandingPage />      

{/* <Shoe shoeImage={imageSrc} shoeSizes={[3,3,5,7]} /> */}


  </div>
  );
}

export default App;
