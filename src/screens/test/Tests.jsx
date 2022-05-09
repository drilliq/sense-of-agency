import React from 'react';
import { Link } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi';

function Tests() {
  return (
    <div className="tests-page">
      <div className="test-instruction">System tests:</div>
      <div className="test-buttons">
        <div className="box-container">
          <Link to="/test/trial-run">
            <div className="test-selection">Shortend Experiment Trial</div>
          </Link>
          <Link to="/test/keystrokes">
            <div className="test-selection">Keystroke speed</div>
          </Link>
        </div>
        <div className="box-container">
          <Link to="/test/pink-noise">
            <div className="test-selection">Pink noise</div>
          </Link>
          <Link to="/test/no-noise">
            <div className="test-selection">No noise</div>
          </Link>
        </div>
      </div>
      <div className="back-container">
        <Link to="/" className="back-button">
          <BiArrowBack className="back-arrow" /> Back
        </Link>
      </div>
    </div>
  );
}

export default Tests;
