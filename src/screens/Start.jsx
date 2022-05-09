import React from 'react';
import { Link } from 'react-router-dom';

function Start() {
  try {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.start();
  } catch (error) {
    return <div className="error">Browser not supported. Please use Chrome.</div>;
  }

  return (
    <div className="start-page">
      <div className="start-instruction">Please select an option:</div>
      <div className="start-buttons">
        <Link to="/experiment">
          <div className="start-selector">Experiment</div>
        </Link>
        <Link to="/test/">
          <div className="start-selector">Tests</div>
        </Link>
      </div>
    </div>
  );
}

export default Start;
