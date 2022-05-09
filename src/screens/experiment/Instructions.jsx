import React from 'react';

function Instructions({ callback, type }) {
  return (
    <div className="instruction-container">
      <div className="instructions">
        <div className="instructions-title">
          {type.toLowerCase() === 'practice' ? 'Practice Run' : 'Instructions'}:
        </div>
        <div className="instructions-details">
          <ul className="instructions-list">
            {type.toLowerCase() === 'alone' ? (
              <>
                <li>Press the "a" key following the rhythm of the asterisk shown on the screen.</li>
                <li>
                  When you feel that you are controlling the speed of the asterisk, loudly say
                  "Yes".
                </li>
                <li>
                  When you stop feeling that you are controlling the speed of the asterisk, loudly
                  say "No".
                </li>
                <li>The experiment will automatically finish.</li>
                <li>
                  When you are ready, press the "Start experiment" button. You will get a 5 second
                  countdown, after which the experiment will start immediately.
                </li>
              </>
            ) : type.toLowerCase() === 'confederate' ? (
              <>
                <li>A fellow participant will join you for this portion of the experiment</li>
                <li>They are going to be the one controlling the asterisk.</li>
                <li>Press the "a" key following the rhythm of the asterisk on the screen.</li>
                <li>
                  When you feel that you are controlling the speed of the asterisk, loudly say
                  "Yes".
                </li>
                <li>
                  When you stop feeling that you are controlling the speed of the asterisk, loudly
                  say "No".
                </li>
                <li>The experiment will automatically finish.</li>
                <li>
                  When you are ready, press the "Start experiment" button. You will get a 5 second
                  countdown, after which the experiment will start immediately.
                </li>
              </>
            ) : (
              <>
                <li>
                  Press the "a" button in sync with the asterisk on the screen. If it works fine,
                  the keyboard on top of the screen will light up.
                </li>
                <li>
                  Loudly and clearly, with pauses inbetween, say "yes" and "no" into the microphone.
                  You will see the microphone change colour accordingly.
                </li>
                <li>
                  There might be a slight delay between your words and the microphone changing
                  colour. However, the timing of what you started speaking is recorded.
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="instructions-start" onClick={callback}>
          Start experiment
        </div>
      </div>
    </div>
  );
}

export default Instructions;
