import { StateContext } from 'components/App';
import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';

export const Modal = () => {
  useEffect(() => {
    document.addEventListener('keydown', handleClick, false);
  }, []);

  const { state, setState } = useContext(StateContext);

  const handleClick = ev => {
    if (ev.target.className === 'Overlay' || ev.key === 'Escape') {
      setState({ ...state, modalActive: false, largeImageUrl: '' });
    }
  };

  const { largeImageURL, modalActive } = state;

  return (
    <div
      className={modalActive ? 'Overlay' : 'Overlay is-hidden'}
      onClick={handleClick}
    >
      <div className="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  state: PropTypes.object,
  setState: PropTypes.func,
  largeImageURL: PropTypes.string,
  modalActive: PropTypes.bool,
};
