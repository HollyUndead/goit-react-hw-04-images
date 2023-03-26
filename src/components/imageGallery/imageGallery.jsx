import { useContext } from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/imageGalleryItem/imageGalleryItem';
import { StateContext } from 'components/App';

export const ImageGallery = () => {
  const { state } = useContext(StateContext);
  return (
    <ul className="ImageGallery">
      {state.photos.map(el => {
        return <ImageGalleryItem key={el.id} photo={el} />;
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  state: PropTypes.object,
  setForModal: PropTypes.func,
};
