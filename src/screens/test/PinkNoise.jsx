import React, { useEffect, useState } from 'react';
import { pinkNoiseData } from '../../assets/pink-noise';
import { Link } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi';
import { FaAsterisk } from 'react-icons/fa';

function PinkNoise() {
  const [timerInterval, setTimerInterval] = useState(0);

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
    const asterisk = document.querySelector('.pink-noise-asterisk');

    keyHighlighter();

    if (asterisk !== null) {
      asterisk.classList.add('nicht');
      let timer = 0;
      pinkNoiseData.forEach((time) => {
        timer = timer + time - 100;
        setTimeout(() => {
          asterisk.classList.remove('nicht');
          setTimeout(() => {
            asterisk.classList.add('nicht');
          }, 100);
          setTimerInterval(time / 1000);
        }, timer);
      });
    }
  }, []);

  return (
    <div className="pink-noise-test">
      <div className="key-instruction">Pink Noise Test (Press "a")</div>
      <div className="back-container">
        <Link to="/test" className="back-button">
          <BiArrowBack className="back-arrow" /> Back
        </Link>
      </div>
      <div className="pink-noise-timer">{timerInterval.toFixed(6)} sec</div>
      <div className="pink-noise-asterisk">
        <FaAsterisk />
      </div>
    </div>
  );
}

export default PinkNoise;
