import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.scss';

const SearchBar = ({ isDay }) => {
  return (
    <div className='searchBar' style={{ backgroundColor: isDay ? '#F4F6F7' : '#343338' }}>

    </div>
  );
};

SearchBar.propTypes = {
  isDay: PropTypes.bool.isRequired
};

export default SearchBar;