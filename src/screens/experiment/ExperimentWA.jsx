import React from 'react';
import { useState } from 'react';
import Break from './Break';
import Countdown from './Countdown';
import Details from './Details';
import ExperimentPinkNoise from './ExperimentPinkNoise';
import ExperimentWhiteNoise from './ExperimentWhiteNoise';
import ExperimentPracticeRun from './ExperimentPracticeRun';
import End from './End';
import Instructions from './Instructions';
import SwitchConfederate from './SwitchConfederate';

function ExperimentWA() {
  const code = 2;

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.start();

  const [detailsData, setDetailsData] = useState(0);
  const [whiteNoiseAData, setWhiteNoiseAData] = useState({});
  const [whiteNoiseCData, setWhiteNoiseCData] = useState({});
  const [pinkNoiseAData, setPinkNoiseAData] = useState({});
  const [pinkNoiseCData, setPinkNoiseCData] = useState({});

  const [details, setDetails] = useState(true);
  const [pInstructions, setPInstructions] = useState(false);
  const [pRun, setPRun] = useState(false);
  const [awInstructions, setawInstructions] = useState(false);
  const [waInstructions, setwaInstructions] = useState(false);
  const [countdown1, setCountdown1] = useState(false);
  const [countdown2, setCountdown2] = useState(false);
  const [whiteNoise1, setWhiteNoise1] = useState(false);
  const [whiteNoise2, setWhiteNoise2] = useState(false);
  const [breakTime1, setBreakTime1] = useState(false);
  const [breakTime2, setBreakTime2] = useState(false);
  const [pinkNoise1, setPinkNoise1] = useState(false);
  const [pinkNoise2, setPinkNoise2] = useState(false);
  const [confederate, setConfederate] = useState(false);
  const [end, setEnd] = useState(false);

  const detailsCallback = () => {
    setDetails(false);
    setPInstructions(true);
  };

  const practiceInstructionCallback = () => {
    setPInstructions(false);
    setPRun(true);
  };

  const practiceRunCallback = () => {
    setPRun(false);
    setawInstructions(true);
  };

  const awInstructionsCallback = () => {
    setawInstructions(false);
    setCountdown1(true);
  };

  const countdownCallback1 = () => {
    setCountdown1(false);
    setWhiteNoise1(true);
  };

  const whiteNoiseCallback1 = (yesEvents, noEvents, participantClicks) => {
    setWhiteNoiseCData({ yesEvents, noEvents, participantClicks });
    setWhiteNoise1(false);
    setBreakTime1(true);
  };

  const breakCallback1 = () => {
    setBreakTime1(false);
    setPinkNoise1(true);
  };

  const pinkNoiseCallback1 = (yesEvents, noEvents, participantClicks) => {
    setPinkNoiseCData({ yesEvents, noEvents, participantClicks });
    setPinkNoise1(false);
    setConfederate(true);
  };

  const switchConfederateCallback = () => {
    setConfederate(false);
    setwaInstructions(true);
  };

  const waInstructionsCallback = () => {
    setwaInstructions(false);
    setCountdown2(true);
  };

  const countdownCallback2 = () => {
    setCountdown2(false);
    setWhiteNoise2(true);
  };

  const whiteNoiseCallback2 = (yesEvents, noEvents, participantClicks) => {
    setWhiteNoiseAData({ yesEvents, noEvents, participantClicks });
    setWhiteNoise2(false);
    setBreakTime2(true);
  };

  const breakCallback2 = () => {
    setBreakTime2(false);
    setPinkNoise2(true);
  };

  const pinkNoiseCallback2 = (yesEvents, noEvents, participantClicks) => {
    setPinkNoiseAData({ yesEvents, noEvents, participantClicks });
    setPinkNoise2(false);
    setEnd(true);
  };

  const endCallback = () => {
    // clean-up and reset
  };

  return (
    <div>
      {/* Details first */}
      {details && <Details callback={detailsCallback} dataCallback={setDetailsData} />}

      {/* Practice Run */}
      {pInstructions && <Instructions callback={practiceInstructionCallback} type="practice" />}
      {pRun && <ExperimentPracticeRun callback={practiceRunCallback} recognition={recognition} />}

      {/* First run - with confederate */}
      {awInstructions && <Instructions callback={awInstructionsCallback} type="confederate" />}
      {countdown1 && <Countdown callback={countdownCallback1} />}
      {whiteNoise1 && (
        <ExperimentWhiteNoise
          callback={whiteNoiseCallback1}
          recognition={recognition}
          amount={520}
        />
      )}
      {breakTime1 && <Break callback={breakCallback1} runNumber={1} />}
      {pinkNoise1 && (
        <ExperimentPinkNoise callback={pinkNoiseCallback1} recognition={recognition} />
      )}

      {/* Second run - without confederate */}
      {confederate && <SwitchConfederate callback={switchConfederateCallback} />}
      {waInstructions && <Instructions callback={waInstructionsCallback} type="alone" />}
      {countdown2 && <Countdown callback={countdownCallback2} />}
      {whiteNoise2 && (
        <ExperimentWhiteNoise
          callback={whiteNoiseCallback2}
          recognition={recognition}
          amount={520}
        />
      )}
      {breakTime2 && <Break callback={breakCallback2} runNumber={3} />}
      {pinkNoise2 && (
        <ExperimentPinkNoise callback={pinkNoiseCallback2} recognition={recognition} />
      )}

      {/* Experiment over */}
      {end && (
        <End
          callback={endCallback}
          data={{
            code,
            detailsData,
            whiteNoiseAData,
            pinkNoiseAData,
            whiteNoiseCData,
            pinkNoiseCData,
          }}
        />
      )}
    </div>
  );
}

export default ExperimentWA;
