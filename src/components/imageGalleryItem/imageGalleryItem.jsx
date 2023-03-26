import { StateContext } from 'components/App';
import PropTypes from 'prop-types';
import { useContext } from 'react';

export const ImageGalleryItem = ({ ...props }) => {
  const { largeImageURL, webformatURL, id } = props.photo;

  const { state, setState, setModalActive } = useContext(StateContext);

  const setForModal = () => {
    setModalActive(true);
    setState({ ...state, largeImageUrl: largeImageURL });
  };

  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt=""
        id={id}
        className="ImageGalleryItem-image"
        onClick={setForModal}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  photo: PropTypes.object,
  state: PropTypes.object,
  setState: PropTypes.func,
  largeImageURL: PropTypes.string,
  webformatURL: PropTypes.string,
  id: PropTypes.number,
};
