import './ImageSlider.css';

import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from 'lucide-react';

import { useState } from 'react';

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div className="image-container">
        {images.map(({ url, alt }) => (
          <img
            key={url}
            src={url}
            alt={alt}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>

      <button onClick={showPrevImage} className="img-slider-btn" style={{ left: '0' }} aria-label="View Previous Image">
        <ArrowBigLeft />
      </button>
      <button onClick={showNextImage} className="img-slider-btn" style={{ right: '0' }} aria-label="View Next Image">
        <ArrowBigRight />
      </button>
      <div className="btn-wrapper">
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            onClick={() => setImageIndex(index)}
            aria-label={`View Image ${index}`}
          >
            {index === imageIndex ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

// aria-label a way to label something for screen readers only
