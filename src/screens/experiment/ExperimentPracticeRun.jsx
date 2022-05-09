import React, { useEffect } from 'react';

import { FaAsterisk, FaKeyboard, FaMicrophone } from 'react-icons/fa';

function ExperimentPracticeRun({ callback, recognition }) {
  console.log(recognition);

  try {
    recognition.start();
  } catch (error) {}

  useEffect(() => {
    recognition.onresult = function (event) {
      const command = event.results[0][0].transcript;
      if (
        command.includes('yes') ||
        command.includes('ja') ||
        command.includes('see') ||
        command.includes('si') ||
        command.includes('sea') ||
        command.includes('yeah') ||
        command.includes('yep')
      ) {
        document.querySelector('.microphone').classList.add('colorGreen');
        setTimeout(() => {
          document.querySelector('.microphone').classList.remove('colorGreen');
        }, 1000);
      }
      if (
        command.includes('no') ||
        command.includes('know') ||
        command.includes('nine') ||
        command.includes('now') ||
        command.includes('neigh') ||
        command.includes('9')
      ) {
        document.querySelector('.microphone').classList.add('colorRed');
        setTimeout(() => {
          document.querySelector('.microphone').classList.remove('colorRed');
        }, 1000);
      }
    };

    recognition.onspeechstart = function () {};

    recognition.onspeechend = function () {
      const microphone = document.querySelector('.microphone');
      recognition.stop();
      if (microphone !== null) {
        if (microphone.classList.contains('colorRed')) {
          microphone.classList.remove('colorRed');
        }
        if (microphone.classList.contains('colorGreen')) {
          microphone.classList.remove('colorGreen');
        }
      }
      setTimeout(() => {
        try {
          recognition.start();
        } catch (error) {}
      }, 300);
    };

    const keyboard = document.querySelector('.keyboard');

    function handleKeyPress(e) {
      if (e.key.toLowerCase() === 'a') {
        keyboard.classList.add('colorGreen');
        setTimeout(() => {
          keyboard.classList.remove('colorGreen');
        }, 150);
      }
    }
    window.addEventListener('keypress', handleKeyPress);

    const asterisk = document.querySelector('.practice-asterisk');
    let counter = 0;

    if (asterisk !== null) {
      asterisk.classList.add('nicht');
      const whiteNoiseInterval = setInterval(() => {
        asterisk.classList.remove('nicht');
        counter++;
        setTimeout(() => {
          asterisk.classList.add('nicht');
        }, 100);
        if (counter > 20) {
          clearInterval(whiteNoiseInterval);
          document.removeEventListener('keydown', null);
          setTimeout(() => {
            callback();
          }, 900);
        }
      }, 900);

      // Clean-up keylistener
      return function cleanupListener() {
        window.removeEventListener('keypress', handleKeyPress);
        recognition.stop();
      };
    }
  }, []);

  return (
    <div className="practice-container">
      <div className="feedback-container">
        <div className="keyboard">
          <FaKeyboard />
        </div>
        <div className="microphone">
          <FaMicrophone />
        </div>
      </div>
      <div className="practice-asterisk">
        <FaAsterisk />
      </div>
    </div>
  );
}

export default ExperimentPracticeRun;
