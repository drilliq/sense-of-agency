import React from 'react';
import '../../css/style.css';
import { Link } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi';

function Keystroke() {
  let key = null;

  document.addEventListener('keydown', (e) => {
    try {
      key = document.querySelector(`.${e.key.toLowerCase()}`);
    } catch (error) {}

    if (key !== null) {
      key.classList.add('red');
    }
  });

  document.addEventListener('keyup', (e) => {
    if (key !== null) {
      document.querySelectorAll('.key').forEach((key) => key.classList.remove('red'));
      key = null;
    }
  });

  return (
    <div className="keystrokes">
      <div className="key-instruction">Press any key</div>
      <div className="row">
        <div className="key q">Q</div>
        <div className="key w">W</div>
        <div className="key e">E</div>
        <div className="key r">R</div>
        <div className="key t">T</div>
        <div className="key y">Y</div>
        <div className="key u">U</div>
        <div className="key i">I</div>
        <div className="key o">O</div>
        <div className="key p">P</div>
      </div>

      <div className="row">
        <div className="key a">A</div>
        <div className="key s">S</div>
        <div className="key d">D</div>
        <div className="key f">F</div>
        <div className="key g">G</div>
        <div className="key h">H</div>
        <div className="key j">J</div>
        <div className="key k">K</div>
        <div className="key l">L</div>
      </div>

      <div className="row">
        <div className="key z">Z</div>
        <div className="key x">X</div>
        <div className="key c">C</div>
        <div className="key v">V</div>
        <div className="key b">B</div>
        <div className="key n">N</div>
        <div className="key m">M</div>
      </div>
      <div className="divider-10"></div>
      <div className="back-container">
        <Link to="/test" className="back-button">
          <BiArrowBack className="back-arrow" /> Back
        </Link>
      </div>
    </div>
  );
}

export default Keystroke;
