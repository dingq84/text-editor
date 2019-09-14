import React, { useState } from 'react';

import Sidebar from '../Sidebar';
import SearchBar from '../SearchBar';
import Note from '../Note';

import './Main.scss';

const Main = () => {
  const [notesNumber, setNotesNumber] =
    useState(localStorage.getItem('number') || 0);
  const [isDay, setIsDay] = useState(false);

  function addNumber() {
    setNotesNumber(notesNumber + 1);
  }

  return (
    <div className='container'>
      <Sidebar
        createFunc={addNumber}
        isDay={isDay}
        setIsDay={setIsDay} />
      <SearchBar isDay={isDay} />
      <Note
        isDay={isDay}
      />
    </div>
  );
};

export default Main;