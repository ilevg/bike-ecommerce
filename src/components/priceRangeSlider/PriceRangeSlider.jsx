import React, { useState } from 'react';
import Slider from 'react-slider';
import './PriceRangeSlider.scss'

const PriceRangeSlider = ({ minPrice, maxPrice }) => {
  const [min, setMin] = useState(minPrice);
  const [max, setMax] = useState(maxPrice);

  const handleChange = ([min, max]) => {
    setMin(min);
    setMax(max);
  };

  return (
    <div className="price-range-slider">
      <Slider
        min={minPrice}
        max={maxPrice}
        value={[min, max]}
        onChange={handleChange}
      />
      <div className="price-range-values">
        <span>$ {min}</span>
        <span>$ {max}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;