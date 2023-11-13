import './ImageSlider.css';

import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

import { useState } from 'react';

type ImageSliderProps = {
  imageUrls: string[];
};

const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <img src={imageUrls[imageIndex]} className="img-slider-img" />
      <button onClick={showPrevImage} className="img-slider-btn" style={{ left: '0' }}>
        <ArrowBigLeft />
      </button>
      <button onClick={showNextImage} className="img-slider-btn" style={{ right: '0' }}>
        <ArrowBigRight />
      </button>
    </div>
  );
};

export default ImageSlider;
