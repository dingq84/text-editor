import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Editor from '../Editor';

import bold from '../assets/images/format_bold.svg';
import italic from '../assets/images/format_italic.svg';
import underline from '../assets/images/format_underline.svg';
import format_indent_increase from '../assets/images/format_indent_increase.svg';
import format_indent_decrease from '../assets/images/format_indent_decrease.svg';
import format_align_left from '../assets/images/format_align_left.svg';
import format_align_right from '../assets/images/format_align_right.svg';
import format_align_center from '../assets/images/format_align_center.svg';
import format_align_justify from '../assets/images/format_align_justify.svg';
import format_line_spacing from '../assets/images/format_line_spacing.svg';
import format_list_bulleted from '../assets/images/format_list_bulleted.svg';
import insert_link from '../assets/images/insert_link.svg';
import image from '../assets/images/image.svg';
import attachment from '../assets/images/attachment.svg';

import './Note.scss';

const Note = ({ isDay }) => {
  const [status, setStatus] = useState({});

  useEffect(() => {
    function toggleStatus(e) {
      setStatus({
        ...status,
        [e.target.alt]: !status[e.target.alt]
      });
    }

    const imgs = document.querySelector('.note__icons').childNodes;

    for (const img of imgs)
      img.addEventListener('click', toggleStatus);

    return () => {
      for (const img of imgs)
        img.removeEventListener('click', toggleStatus);
    }
  });

  return (
    <div className='note' style={{ backgroundColor: isDay ? '#fff' : '#26252A' }}>
      <div className="note__icons">
        <img src={bold} alt="bold" />
        <img src={italic} alt="italic" />
        <img src={underline} alt="underline" />
        <img src={format_indent_increase} alt="format_indent_increase" />
        <img src={format_indent_decrease} alt="format_indent_decrease" />
        <img src={format_align_left} alt="format_align_left" />
        <img src={format_line_spacing} alt="format_line_spacing" />
        <img src={format_list_bulleted} alt="format_list_bulleted" />
        <img src={insert_link} alt="insert_link" />
        <img src={image} alt="image" />
        <img src={attachment} alt="attachment" />
      </div>
      <div>
        <Editor
          status={status}
        />
      </div>
    </div>
  )
};

Note.propTypes = {
  isDay: PropTypes.bool.isRequired
};

export default Note;