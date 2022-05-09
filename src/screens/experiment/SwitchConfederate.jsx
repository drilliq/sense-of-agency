import React from 'react';

function SwitchConfederate({ callback }) {
  const continueExperiment = () => {
    if (window.confirm('Continue experiment?')) {
      callback();
    }
  };

  return (
    <div className="break">
      <div className="instruction-container">
        <div className="instructions">
          <div className="instructions-title">Interval</div>
          <div className="break-details">
            <ul className="break-list">
              <li>Part one of the experiment is complete.</li>
              <li>The experimental setup will not be changed.</li>
              <li>Please wait for the administrator to continue the experiment</li>
              <li>Please DO NOT press the button below!</li>
            </ul>
            <div className="continue-button" onClick={continueExperiment}>
              Continue
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwitchConfederate;
