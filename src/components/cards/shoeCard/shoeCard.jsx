import React, { useState } from 'react';

const Shoe = ({ shoeImage, shoeSizes}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className="flip-card-front">
          <img src={shoeImage} alt="Shoe" />
          <div className="shoe-sizes">
            <p>Select size:</p>
            {shoeSizes.map((size) => (
              <button key={size} onClick={() => alert(`Selected size: ${size}`)}>
                {size}
              </button>
            ))}
          </div>
          <button >Buy Now</button>
          <button onClick={handleFlip}>Flip to back</button>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
      
    <h3>riufbirjsfgbiufj</h3>
          <button onClick={handleFlip}>Flip to front</button>
        </div>
      </div>
    </div>
  );
};

export default Shoe;
