import { useContext } from 'react';
import PropTypes from 'prop-types';
import './loader.css';
import { StateContext } from 'components/App';

export const Loader = () => {
  const { state } = useContext(StateContext);

  return (
    <div className={state.loading ? 'loader' : 'loader is-hidden'}>
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  );
};

Loader.propTypes = {
  state: PropTypes.object,
  loading: PropTypes.bool,
};
