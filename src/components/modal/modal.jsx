/* eslint-disable react-hooks/exhaustive-deps */
import { StateContext } from 'components/App';
import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';

export const Modal = () => {
  useEffect(() => {
    document.addEventListener('keydown', handleClick);
  }, []);

  const { modalActive, setModalActive, state } = useContext(StateContext);

  const handleClick = ev => {
    if (ev.target.className === 'Overlay' || ev.key === 'Escape') {
      setModalActive(false);
    }
  };

  const { largeImageUrl } = state;

  return (
    <div
      className={modalActive ? 'Overlay' : 'Overlay is-hidden'}
      onClick={handleClick}
    >
      <div className="Modal">
        <img src={largeImageUrl} alt="" />
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
