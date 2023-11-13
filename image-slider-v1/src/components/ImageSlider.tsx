import './ImageSlider.css';

import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

import { useState } from 'react';

type ImageSliderProps = {
  imageUrls: string[];
};

const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <img src={imageUrls[imageIndex]} className="img-slider-img" />
      <button className="img-slider-btn" style={{ left: '0' }}>
        <ArrowBigLeft />
      </button>
      <button className="img-slider-btn" style={{ right: '0' }}>
        <ArrowBigRight />
      </button>
    </div>
  );
};

export default ImageSlider;
