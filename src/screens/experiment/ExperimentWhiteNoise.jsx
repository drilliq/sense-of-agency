import React, { useEffect } from 'react';

import { FaAsterisk } from 'react-icons/fa';

function ExperimentWhiteNoise({ callback, recognition, amount = 520 }) {
  const participant = [];
  const yesEvents = [];
  const noEvents = [];

  let whiteStartTime = new Date();

  let wordStartTimer = undefined;
  let wordDelay = undefined;

  try {
    recognition.start();
  } catch (error) {
    console.log('No Noise: listener already started');
  }

  recognition.onresult = function (event) {
    const command = event.results[0][0].transcript;
    if (
      command.includes('yes') ||
      command.includes('ja') ||
      command.includes('yeah') ||
      command.includes('yep')
    ) {
      yesEvents.push(new Date() - whiteStartTime - wordDelay);
      wordStartTimer = undefined;
    }
    if (command.includes('no') || command.includes('know') || command.includes('now')) {
      noEvents.push(new Date() - whiteStartTime - wordDelay);
      wordStartTimer = undefined;
    }
  };

  recognition.onspeechend = function () {
    recognition.stop();
    wordDelay = new Date() - wordStartTimer;
    setTimeout(() => {
      try {
        recognition.start();
      } catch (error) {}
    }, 300);
  };

  recognition.onspeechstart = function () {
    wordStartTimer = new Date();
  };

  recognition.onerror = function (e) {
    console.log('Error: ', e);
  };

  useEffect(() => {
    function handleKeyPress(e) {
      if (e.key.toLowerCase() === 'a') {
        participant.push(new Date() - whiteStartTime);
      }
    }
    window.addEventListener('keypress', handleKeyPress);

    const asterisk = document.querySelector('.white-noise-asterisk');
    let counter = 0;

    if (asterisk !== null) {
      asterisk.classList.add('nicht');
      const whiteNoiseInterval = setInterval(() => {
        asterisk.classList.remove('nicht');
        counter++;
        setTimeout(() => {
          asterisk.classList.add('nicht');
        }, 100);
        if (counter > +amount) {
          clearInterval(whiteNoiseInterval);
          document.removeEventListener('keydown', null);
          setTimeout(() => {
            callback(yesEvents, noEvents, participant);
          }, 900);
        }
      }, 900);

      return function cleanupListener() {
        window.removeEventListener('keypress', handleKeyPress);
        recognition.stop();
      };
    }
  }, []);

  return (
    <div className="white-noise">
      <div className="white-noise-asterisk">
        <FaAsterisk />
      </div>
    </div>
  );
}

export default ExperimentWhiteNoise;
