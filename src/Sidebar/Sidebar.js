import React from 'react';
import PropTypes from 'prop-types';

import add from '../assets/images/add.svg';
import file from '../assets/images/file.svg';
import star from '../assets/images/bookmark-star.svg';
import label from '../assets/images/label.svg';
import calendar from '../assets/images/calendar_today.svg';
import people from '../assets/images/people.svg';
import deleteSvg from '../assets/images/delete.svg';
import day from '../assets/images/wb_sunny.svg';
import night from '../assets/images/nights_stay.svg';

import './Sidebar.scss';

const Sidebar = ({ createFunc, isDay, setIsDay }) => {

  return (
    <div className='sidebar' style={{backgroundColor: isDay? '#2F419B' : '#26252A'}}>
      <h1>FreeNote</h1>
      <button 
        onClick={createFunc} 
        style={{backgroundColor: isDay? '#fff' : '#fed32c'}}
      >
        <img 
          src={add} 
          alt="add"
          style={{backgroundColor: isDay? '#2F419B' : '#26252A'}}
        />
        <span>新增筆記</span>
      </button>
      <ul>
        <li>
          <img src={file} alt="file" />
          <span>所有筆記</span>
        </li>
        <li>
          <img src={star} alt="file" />
          <span>捷徑</span>
        </li>
        <li>
          <img src={label} alt="label" style={{ transform: 'rotate(45deg)' }} />
          <span>標籤</span>
        </li>
        <li>
          <img src={calendar} alt="calendar" />
          <span>月曆</span>
        </li>
        <li>
          <img src={people} alt="share" />
          <span>與我共用</span>
        </li>
        <li>
          <img src={deleteSvg} alt="delete" />
          <span>垃圾桶</span>
        </li>
      </ul>

      <div>
        <span>模式</span>
        <img 
        src={day} 
        alt="day" 
        onClick={() => setIsDay(true)}
        style={{backgroundColor: isDay? '#fff' : 'transparent'}}
        />
        <img 
        src={night} 
        alt="night" 
        onClick={() => setIsDay(false)} 
        style={{backgroundColor: !isDay? '#fff' : 'transparent'}}
        />
      </div>
    </div>
  )
};

Sidebar.propTypes = {
  createFunc: PropTypes.func.isRequired,
  isDay: PropTypes.bool.isRequired,
  setIsDay: PropTypes.func.isRequired
};

export default Sidebar;