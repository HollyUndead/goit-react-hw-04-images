import axios from 'axios';

const handleRespons = (prevState, newPage, thisState) => {
  let newState = { ...prevState };
  newState.searchFilter = thisState.searchFilter;
  newState.pages = thisState.pages;
  newState.hideButton = false;
  newState.loading = false;
  if (newPage.length === 0) {
    newState.loading = false;
    newState.hideButton = true;
    return newState;
  }
  if (newState.pages === 1) {
    newState.photos = newPage;
    return newState;
  }
  newState.photos = [...prevState.photos, ...newPage];
  if (newState.photos.length % 12 !== 0) {
    newState.hideButton = true;
  }
  return newState;
};

export const getRequest = async (prevState, state, setState) => {
  setState({ ...state, loading: true, hideButton: true });
  const firstPartUrl = `https://pixabay.com/api/?q=${state.searchFilter}&page=${state.pages}`;
  const secondPartUrl =
    '&key=34670018-4febe9e6c0cb9fd604326a600&image_type=photo&orientation=horizontal&per_page=12';
  const url = firstPartUrl + secondPartUrl;

  try {
    const res = await axios.get(url);
    const newState = handleRespons(prevState, res.data.hits, state, setState);
    setState({
      ...state,
      photos: newState.photos,
      hideButton: newState.hideButton,
      loading: newState.loading,
    });
  } catch (error) {
    setState({ ...state, error: error.message });
  }
};
