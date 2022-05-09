import React, { useEffect } from 'react';
import { pinkNoiseData, pinkNoiseDataShort } from '../../assets/pink-noise';
import { FaAsterisk } from 'react-icons/fa';

function ExperimentPinkNoise({ callback, recognition, version }) {
  const participant = [];
  const yesEvents = [];
  const noEvents = [];

  let pinkStartTime = new Date();

  const data = version === 'short' ? pinkNoiseDataShort : pinkNoiseData;

  let wordStartTimer = undefined;
  let wordDelay = undefined;

  try {
    recognition.start();
  } catch (error) {
    console.log('Pink noise: listner already started');
  }

  recognition.onresult = function (event) {
    const command = event.results[0][0].transcript;
    if (
      command.includes('yes') ||
      command.includes('ja') ||
      command.includes('yeah') ||
      command.includes('yep')
    ) {
      yesEvents.push(new Date() - pinkStartTime - wordDelay);
      wordStartTimer = undefined;
    }
    if (command.includes('no') || command.includes('know') || command.includes('now')) {
      noEvents.push(new Date() - pinkStartTime - wordDelay);
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
        participant.push(new Date() - pinkStartTime);
      }
    }
    window.addEventListener('keypress', handleKeyPress);

    const asterisk = document.querySelector('.experiment-pink-noise-asterisk');

    const arrayLength = data.length;
    let counter = 0;

    if (asterisk !== null) {
      asterisk.classList.add('nicht');
      let timer = 0;
      data.forEach((time) => {
        timer = timer + time - 100;

        setTimeout(() => {
          asterisk.classList.remove('nicht');
          counter++;
          setTimeout(() => {
            asterisk.classList.add('nicht');
          }, 100);

          if (counter >= arrayLength) {
            setTimeout(() => {
              callback(yesEvents, noEvents, participant);
            }, 900);
          }
        }, timer);
      });

      return function cleanupListener() {
        window.removeEventListener('keypress', handleKeyPress);
        recognition.stop();
      };
    }
  }, []);

  return (
    <div className="pink-noise">
      <div className="experiment-pink-noise-asterisk">
        <FaAsterisk />
      </div>
    </div>
  );
}

export default ExperimentPinkNoise;
