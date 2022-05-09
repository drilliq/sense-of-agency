import React from 'react';

import { FiSmile } from 'react-icons/fi';

function End({ data }) {
  const {
    code,
    detailsData: details,
    whiteNoiseAData: whiteA,
    pinkNoiseAData: pinkA,
    whiteNoiseCData: whiteC,
    pinkNoiseCData: pinkC,
  } = data;

  console.log('WhiteNoiseAData: ', whiteA);
  console.log('PinkNoiseAData: ', pinkA);
  console.log('WhiteNoiseCData.noEvents: ', whiteC.noEvents);

  const downloadFile = async () => {
    const fileName = new Date().toISOString();

    const csv = objectToCsv();
    console.log(csv);

    const blob = new Blob([csv], { type: 'csv' });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.innerText = 'Click me';
    link.href = href;
    link.download = fileName + '.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const objectToCsv = () => {
    const codeString = `Experiment,${code}`;

    // White Noise Alone
    const whiteNoiseA = `WhiteNoiseAlone_Click,${whiteA.participantClicks.join(
      ','
    )},\nWhiteNoiseAlone_Yes,${whiteA.yesEvents.join(
      ','
    )},\nWhiteNoiseAlone_No,${whiteA.noEvents.join(',')}`;

    // Pink Noise Alone
    const pinkNoiseA = `PinkNoiseAlone_Click,${pinkA.participantClicks.join(
      ','
    )},\nPinkNoiseAlone_Yes,${pinkA.yesEvents.join(',')},\nPinkNoiseAlone_No,${pinkA.noEvents.join(
      ','
    )}`;

    // White Noise Confederate
    const whiteNoiseC = `WhiteNoiseConfederate_Click,${whiteC.participantClicks.join(
      ','
    )},\nWhiteNoiseConfederate_Yes,${whiteC.yesEvents.join(
      ','
    )},\nWhiteNoiseConfederate_No,${whiteC.noEvents.join(',')}`;

    // Pink Noise Confederate
    const pinkNoiseC = `PinkNoiseConfederate_Click,${pinkC.participantClicks.join(
      ','
    )},\nPinkNoiseConfederate_Yes,${pinkC.yesEvents.join(
      ','
    )},\nPinkNoiseConfederate_No,${pinkC.noEvents.join(',')}`;

    const returnString = `${codeString},\nAge,${details},\n${whiteNoiseA},\n${pinkNoiseA},\n${whiteNoiseC},\n${pinkNoiseC},`;

    return returnString;
  };

  return (
    <div className="instruction-container">
      <div className="instructions">
        <div className="instructions-title">Experiment over</div>
        <div className="instructions-details">
          <ul className="instructions-list">
            <li>The experiment is now over. Thank you very much for your participation.</li>
            <li>Please inform the administrator that the experiment has finished.</li>
            <li>Have a lovely rest of your day.</li>
          </ul>
          <div className="smiley">
            <FiSmile />
          </div>
          <div className="download-btn-container">
            <button className="btn-download" onClick={() => downloadFile()}>
              Download results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default End;
