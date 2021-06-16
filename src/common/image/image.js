import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';
import React from 'react';

const Image = ({ image }) => {
  return (
    <div>
      <LazyLoadImage
        alt={image.alt}
        height={image.height}
        src={image.src} // use normal <img> attributes as props
        width={image.width}
      />
      <span>{image.caption}</span>
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.object.isRequired,
};

export default Image;
