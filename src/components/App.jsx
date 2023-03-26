import { createContext, useEffect, useState, useRef } from 'react';

import { SearchBar } from './searcheBar/searchBar';
import { Modal } from './modal/modal';
import { Loader } from './loader/loader';
import { ButtonPage } from './button/button';
import { ImageGallery } from './imageGallery/imageGallery';
import { getRequest } from 'functions/getRequest';
import './styles.css';

export const StateContext = createContext();

export const App = () => {
  const initialState = {
    photos: [],
    error: '',
    loading: false,
    largeImageUrl: '',
    modalActive: false,
    searchFilter: '',
    pages: 1,
    hideButton: true,
  };

  const [state, setState] = useState(initialState);
  const prevState = useRef();
  useEffect(() => {
    prevState.current = state;
  }, [state]);

  useEffect(() => {
    if (state.searchFilter.trim().length !== 0) {
      getRequest(prevState.current, state, setState);
    }
  }, [state.searchFilter, state.pages]);

  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <StateContext.Provider value={{ state: state, setState: setState }}>
        <SearchBar />
        <ImageGallery />
        <Loader />
        <Modal />
        <ButtonPage />
      </StateContext.Provider>
    </div>
  );
};
