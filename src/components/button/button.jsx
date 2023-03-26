import { StateContext } from 'components/App';
import PropTypes from 'prop-types';
import { useContext } from 'react';

export const ButtonPage = () => {
  const props = useContext(StateContext);
  const handleClick = () => {
    props.setState(props.state.pages + 1);
  };
  let buttonClassWarp = 'buttonWrap is-hidden';
  if (props.state.hideButton === false) {
    buttonClassWarp = 'buttonWrap';
  }
  return (
    <div className={buttonClassWarp}>
      <button type="button" className="Button" onClick={handleClick}>
        Load more
      </button>
    </div>
  );
};

ButtonPage.propTypes = {
  state: PropTypes.object,
  setState: PropTypes.func,
};
