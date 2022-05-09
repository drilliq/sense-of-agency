import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi';
import { FaAsterisk } from 'react-icons/fa';

function WhiteNoise() {
  const [timerInterval, setTimerInterval] = useState('1.000000');

  const keyHighlighter = () => {
    const highlight = document.querySelector('.key-instruction');

    document.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'a') {
        if (highlight !== null) {
          highlight.classList.add('pink');
        }
      }
    });

    document.addEventListener('keyup', (e) => {
      if (e.key.toLowerCase() === 'a') {
        if (highlight !== null) {
          highlight.classList.remove('pink');
        }
      }
    });
  };

  useEffect(() => {
    const asterisk = document.querySelector('.white-noise-asterisk');
    let counter = 0;

    keyHighlighter();

    if (asterisk !== null) {
      asterisk.classList.add('nicht');
      const whiteNoiseInterval = setInterval(() => {
        asterisk.classList.remove('nicht');
        counter++;
        setTimerInterval('1.000000');
        setTimeout(() => {
          asterisk.classList.add('nicht');
        }, 100);
        if (counter > 520) {
          clearInterval(whiteNoiseInterval);
        }
      }, 900);
    }
  }, []);

  return (
    <div className="pink-noise-test">
      <div className="key-instruction">No Noise Test (press "a")</div>
      <div className="back-container">
        <Link to="/test" className="back-button">
          <BiArrowBack className="back-arrow" /> Back
        </Link>
      </div>
      <div className="pink-noise-timer">{timerInterval} sec</div>
      <div className="white-noise-asterisk">
        <FaAsterisk />
      </div>
    </div>
  );
}

export default WhiteNoise;
