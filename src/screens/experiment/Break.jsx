import { useEffect } from 'react';

function Break({ callback, runNumber, length = 60 }) {
  useEffect(() => {
    const container = document.querySelector('.break-countdown');

    let countdown = length - 1;

    const timer = setInterval(() => {
      if (countdown > 0) {
        container.innerHTML = `${countdown} second${countdown > 1 ? 's' : ''}`;
      }
      countdown--;

      if (countdown < 0) {
        clearInterval(timer);
        callback();
      }
    }, 1000);
  }, [callback]);

  return (
    <div className="break">
      <div className="instruction-container">
        <div className="instructions">
          <div className="instructions-title">Short Break</div>
          <div className="break-details">
            <ul className="break-list">
              <li>Experimental run #{runNumber} has completed.</li>
              <li>Experimental run #{runNumber + 1} will start automatically in:</li>
            </ul>
            <div className="break-countdown">{length} seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Break;
