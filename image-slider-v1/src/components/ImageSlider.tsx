import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

import { useState } from 'react';

type ImageSliderProps = {
  imageUrls: string[];
};

const ImageSlider = ({ imageUrls }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div>
      <img src={imageUrls[imageIndex]} />
      <button>
        <ArrowBigLeft />
      </button>
      <button>
        <ArrowBigRight />
      </button>
    </div>
  );
};

export default ImageSlider;
