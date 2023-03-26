import { StateContext } from 'components/App';
import PropTypes from 'prop-types';
import { useContext } from 'react';

export const ButtonPage = () => {
  const props = useContext(StateContext);
  const { state } = props;
  const handleClick = () => {
    props.setState({ ...state, pages: state.pages + 1 });
  };

  return (
    <div className={state.hideButton ? 'buttonWrap is-hidden' : 'buttonWrap'}>
      <button type="button" className="Button" onClick={handleClick}>
        Load more
      </button>
    </div>
  );
};

ButtonPage.propTypes = {
  state: PropTypes.object,
  setState: PropTypes.func,
  pages: PropTypes.number,
};
