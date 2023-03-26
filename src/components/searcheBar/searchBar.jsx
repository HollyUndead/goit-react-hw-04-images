import { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { StateContext } from 'components/App';
const imgForButton = require('../../img/png-transparent-magnifying-glass-computer-icons-investigation-glass-image-file-formats-magnifier.png');

export const SearchBar = () => {
  const { state, setState } = useContext(StateContext);

  const searchPhotos = ev => {
    ev.preventDefault();
    let stringForUrl = ev.target.searchFilter.value.split(' ');
    const stringForSearch = stringForUrl.join('+');
    setState({
      ...state,
      searchFilter: stringForSearch,
      loading: true,
      hideButton: true,
      photos: [],
      pages: 1,
    });
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={searchPhotos}>
        <button type="submit" className="SearchForm-button">
          <img src={imgForButton} alt="" />
        </button>
        <input
          className="SearchForm-input"
          type="text"
          name="searchFilter"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  state: PropTypes.object,
  setState: PropTypes.func,
};
